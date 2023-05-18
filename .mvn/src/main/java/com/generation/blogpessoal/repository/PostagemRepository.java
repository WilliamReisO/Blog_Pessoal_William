package com.generation.blogpessoal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.generation.blogpessoal.model.Postagem;

public interface PostagemRepository extends JpaRepository<Postagem,Long>{
	// JPA tranforma o que digitamos em comandos no MY SQL
	// Esse comando abaixo faz o SELECT * FROM alguma coisa no Mysql.
	
	public List <Postagem> findAllByTituloContainingIgnoreCase(@Param("titulo")String titulo);

}
