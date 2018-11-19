using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace API.Controllers
{
    [Route("api/usuario")]
    public class UsuarioController : Controller
    {
        private readonly List<Usuario> _usuarios;
        public UsuarioController()
        {
            _usuarios = new List<Usuario>();

            _usuarios.Add(new Usuario() { Id = 1, Nome= "Paulo Rogério"});
            _usuarios.Add(new Usuario() { Id = 2, Nome= "Fernanda"});
            _usuarios.Add(new Usuario() { Id = 3, Nome= "Juca"});
            _usuarios.Add(new Usuario() { Id = 4, Nome= "Pedro"});
            _usuarios.Add(new Usuario() { Id = 5, Nome= "Agatha"});
            _usuarios.Add(new Usuario() { Id = 6, Nome= "Aline" });
        }

        [HttpGet]
        public string Get()
        {
            return "API versão 1.0";
        }

        
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var usuario = _usuarios.FirstOrDefault(x => x.Id == id);

            if (usuario == null)
            {
                return NotFound("Usuário não encontrado");
            }

            return Ok(usuario);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Usuario usuario)
        {
            return Ok(new { Usuario = usuario, Mensagem = "Usuário adicionado com sucesso!" });
        }

        
        [HttpPut()]
        public IActionResult Put([FromBody]Usuario usuarioRequest)
        {
            var usuarioDb = _usuarios.FirstOrDefault(x => x.Id == usuarioRequest.Id);

            usuarioDb.Nome = usuarioRequest.Nome;

            
            return Ok(new { Usuario = usuarioDb, Mensagem = "Alteração realizada com sucesso!" });
        }

        
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var usuario = _usuarios.FirstOrDefault(x => x.Id == id);

            if (usuario != null)
            {
                return Ok(new { Usuario = usuario, Mensagem = "Exclusão realizada com sucesso!" });
            }

            return NotFound("Usuário não encontrado!");
        }
    }
}
