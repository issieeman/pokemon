using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using motoApi.Model;

namespace motoApi.Controllers
{
    [Route("api/v1/helmets")]
public class HelmetController : Controller
{
    private readonly StoreContext storeContext;

    public HelmetController(StoreContext _ctx)
    {
        this.storeContext = _ctx;
    }

    [Route("{id}")]   // api/v1/helmets/2
    [HttpGet]
    public Helmet GetHelmet(int id)
    {
        
        var helmet = storeContext.Helmets.Single(obj => obj.Id == id);
        return helmet;
    }

    [HttpGet]         // api/v1/helmets
    public List<Helmet> GetAllHelmets()
    {
        return storeContext.Helmets.ToList();
    }

    [Route("{id}")]
    [HttpDelete]
    public IActionResult DeleteHelmet(int id)
    {
         var delete = storeContext.Helmets.Single(d => d.Id == id);
        storeContext.Helmets.Remove(delete);
        storeContext.SaveChanges();
     
        //helmet verwijderen ..
        return NoContent();
    }

    [HttpPost]
    public IActionResult CreateHelmet([FromBody] Helmet newHelmet)
    {
        //motor toevoegen in de databank, Id wordt dan ook toegekend
        newHelmet.Id = 3;
        // Stuur een result 201 terug met daarin het aangemaakte object  
        return Created("", newHelmet);
        // Alternatief met url naar action om deze resource op te halen
        // return CreatedAtAction(nameof(GetBook), new { id = newBook.Id }, newBook);
    }

   /* [HttpPut]
    public IActionResult UpdateHelmet([FromBody] Helmet updateHelmet)
    {
        var orgHelmet = list.FirstOrDefault(d => d.Id == updateHelmet.Id);
        if(orgHelmet == null)
            return NotFound();

        orgHelmet.Brand = updateHelmet.Brand;
        orgHelmet.Name = updateHelmet.Name;
        orgHelmet.Type = updateHelmet.Type;
        orgHelmet.Color = updateHelmet.Color;
        orgHelmet.Price = updateHelmet.Price;
        
        return Ok(orgHelmet);
    }*/
}
}


