using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ReactCore.Controllers
{
   
    [Route("api/Mspecs")]
    [ApiController]
    public class MspecsController : ControllerBase
    {
        private readonly Data fData = new Data();
        // GET: api/Mspecs IEnumerable<string>
        [HttpGet]
        public IEnumerable<string> Get()
        {
           
           
            return new string[] { "value1", "value2" };
        }
        
        // GET: api/Mspecs/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Mspecs
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Mspecs/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
