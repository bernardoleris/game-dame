import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { check, validationResult } from 'express-validator';

const router = express.Router();

router.post('/register', [
    check('username', 'Nome de usuário é obrigatório').not().isEmpty(),
    check('email', 'Por favor, inclua um email válido').isEmail(),
    check('cpf', 'Por favor, inclua um CPF válido (11 dígitos)').isLength({ min: 11, max: 11 }),
    check('password', 'Por favor, inclua uma senha com 6 ou mais caracteres').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password, cpf } = req.body;

    try {
        let user = await User.findOne({ $or: [{ email }, { cpf }] });
        if (user) {
            return res.status(400).json({ msg: 'Usuário já existe' });
        }

        user = new User({
            username,
            email,
            password,
            cpf
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        res.json({ msg: 'Usuário registrado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
});

router.post('/login', [
    check('email', 'Por favor, inclua um email válido').isEmail(),
    check('password', 'Senha é obrigatória').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Credenciais inválidas' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Credenciais inválidas' });
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, 'secreto', { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
});

export default router;

