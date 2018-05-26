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



    [HttpGet]         // api/v1/helmets
    public List<Helmet> GetAllHelmets(string brand, string name, int? page, string sort, int length = 5, string dir = "asc")
    {
        IQueryable<Helmet> query = storeContext.Helmets;

        if (!string.IsNullOrWhiteSpace(brand))
            query = query.Where(d => d.Brand == brand);
        if (!string.IsNullOrWhiteSpace(name))
            query = query.Where(d => d.Name == name);

        if (!string.IsNullOrWhiteSpace(sort))
        {
            switch (sort)
            {
                case "name":
                    if (dir == "asc")
                        query = query.OrderBy(d => d.Name);
                    else if (dir == "desc")
                        query = query.OrderByDescending(d => d.Name);
                    break;
                case "cc":
                    if (dir == "asc")
                        query = query.OrderBy(d => d.Type);
                    else if (dir == "desc")
                        query = query.OrderByDescending(d => d.Type);
                    break;
            }
        }

        if (page.HasValue)
            query = query.Skip(page.Value * length);
        query = query.Take(length);

        return query.ToList();
    }



    [Route("{id}")]   // api/v1/helmets/2
    [HttpGet]
    public IActionResult  GetHelmet(int id)
    {
        
        var helmet = storeContext.Helmets.Single(obj => obj.Id == id);
        if(helmet == null)
        return NotFound();

        return Ok(helmet);
    }

    [Route("{id}")]
    [HttpDelete]
    public IActionResult DeleteHelmet(int id)
    {
         var helmet = storeContext.Helmets.Find(id);
         if(helmet == null)
            return NotFound();

        //helmet verwijderen ..
        storeContext.Helmets.Remove(helmet);
        storeContext.SaveChanges();
     
        //Standaard response 204 bij een gelukte delete
        return NoContent();
    }

    [HttpPost]
    public IActionResult CreateHelmet([FromBody] Helmet newHelmet)
    {
        //motor toevoegen in de databank, Id wordt dan ook toegekend
        storeContext.Helmets.Add(newHelmet);  
        storeContext.SaveChanges();

        // Stuur een result 201 terug met daarin het aangemaakte object
        return Created("", newHelmet);

    }

    [HttpPut]
    public IActionResult UpdateHelmet([FromBody] Helmet updateHelmet)
    {
        var orgHelmet = storeContext.Helmets.Find(updateHelmet);
        if(orgHelmet == null)
            return NotFound();

        orgHelmet.Brand = updateHelmet.Brand;
        orgHelmet.Name = updateHelmet.Name;
        orgHelmet.Type = updateHelmet.Type;
        orgHelmet.Color = updateHelmet.Color;
        orgHelmet.Price = updateHelmet.Price;
        
        storeContext.SaveChanges();
        return Ok(orgHelmet);
    }
}
}


