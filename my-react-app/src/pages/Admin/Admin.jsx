import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import './Admin.css';
import '../../styles/Index.css';
import Input from '../../components/Input.jsx'
import Button from "../../components/Button.jsx";

function Admin(){
    return (
        <div>
            <Navbar />
            <div className="telas-admin">
                <div className="box-admin">
                    <div className="size-box">
                        <div className="admin-titulo">Cadastrar Jogo</div>
                            <Input 
                                placeholder="Titulo do jogo"
                                textAlign="center"
                                height="50px"
                                width="390px"
                            />
                            <Input 
                                placeholder="Genero"
                                textAlign="center"
                                height="50px"
                                width="390px"
                            />
                            <Input 
                                placeholder="Descricao"
                                textAlign="center"
                                height="154px"
                                width="390px"
                            />
                            <Button 
                                text="Inserir imagem"
                                bgColor="#FFFFFF"
                                textColor="#606060"
                                height="50px"
                                width="200px"
                                fontSize="24px"
                                fontWeight="300"
                            />
                            <Button 
                                text="Cadastrar"
                                bgColor="#FFFFFF"
                                textColor="#606060"
                            />
                        </div>
                    </div>
                <div className="box-admin">
                    <div className="size-box">
                        <div className="admin-titulo">Remover Jogo</div>
                        <Input 
                            placeholder="Titulo do jogo ou ID"
                            textAlign="center"
                            height="50px"
                            width="390px"
                            backgroundColor="#4B626C" // define a cor de fundo
                            placeholderColor="#FFFFFF"
                        />
                        <Button 
                            text="Remover"
                            bgColor="#4B626C"
                            textColor="#F3F3F3"
                        />
                        </div>
                    </div>
                <div className="box-admin">
                    <div className="size-box">
                        <div className="admin-titulo">Editar Jogo</div>
                        <Input 
                            placeholder="Titulo do jogo"
                            textAlign="center"
                            height="50px"
                            width="390px"
                        />
                        <Input 
                            placeholder="Genero"
                            textAlign="center"
                            height="50px"
                            width="390px"
                        />
                        <Input 
                            placeholder="Descricao"
                            textAlign="center"
                            height="154px"
                            width="390px"
                        />
                        <Button 
                            text="Inserir imagem"
                            bgColor="#FFFFFF"
                            textColor="#606060"
                            height="50px"
                            width="200px"
                            fontSize="24px"
                            fontWeight="300"
                        />
                        <Button 
                            text="Modificar"
                            bgColor="#FFFFFF"
                            textColor="#606060"
                        />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;