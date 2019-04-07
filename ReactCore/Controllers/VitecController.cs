using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ReactCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VitecController : ControllerBase
    {
        // GET: api/Vitec
        [HttpGet]
        public IEnumerable<string> Get()
        {
            var data = Data.GetVitecDataAsync();
            return new string[] { "value1", "value2" };
        }

        // GET: api/Vitec/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Vitec
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Vitec/5
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
