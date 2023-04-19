package com.generation.blogpessoal.model;

import java.time.LocalDateTime;

import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

//toda model começa pela Entity.

//indica ao spring que o objeto virará uma tablea 
@Entity
// define um nome para a tabela a ser criada 
@Table(name = "tb_postagens")
public class Postagem {
// basicamente toda a model é contruida dessa forma alternando os atributos (titulo,nome .etc)

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
//o Notblack transforma o atributo em obrigatorio , é não permite a criação do objeto sem o atributo Notblank
	
	@NotBlank(message = "O atributo título é Obrigatório!")
	@Size(min = 5, max = 100, message = "O atributo texto deve conter no mínimo 05 e no máximo 1000 caracteres")
	private String titulo;

	@NotBlank(message = "O atributo texto é Obrigatório!")
	@Size(min = 10, max = 100, message = "O atributo texto deve conter no mínimo 10 e no máximo 1000 caracteres")
	private String texto;

	@UpdateTimestamp
	private LocalDateTime data;
	
	@ManyToOne
	@JsonIgnoreProperties("postagem")
	private Tema tema;
	
	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitulo() {
		return this.titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getTexto() {
		return this.texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

	public LocalDateTime getData() {
		return this.data;
	}

	public void setData(LocalDateTime data) {
		this.data = data;
	}
	//Relacionando as tabelas aqui 

	public Tema getTema() {
		return tema;
	}

	public void setTema(Tema tema) {
		this.tema = tema;
	}

}