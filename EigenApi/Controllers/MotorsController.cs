using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using motoApi.Model;

namespace motoApi.Controllers
{
    [Route("api/v1/motors")]
public class MotorsController : Controller
{
    private readonly StoreContext storeContext;

    public MotorsController(StoreContext _ctx)
    {
        this.storeContext = _ctx;
       
    }

    [HttpGet]         // api/v1/motors
    public List<Motor> GetAllMotors(string brand, string name, int? page, string sort, int length = 5, string dir = "asc")
    {
        IQueryable<Motor> query = storeContext.Motors;

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
                        query = query.OrderBy(d => d.CilinderSize);
                    else if (dir == "desc")
                        query = query.OrderByDescending(d => d.CilinderSize);
                    break;
            }
        }

        if (page.HasValue)
            query = query.Skip(page.Value * length);
        query = query.Take(length);

        return query.ToList();
    }


    [Route("{id}")]   // api/v1/motors/2
    [HttpGet]
    public IActionResult GetMotor(int id)
    {
        var motor = storeContext.Motors.SingleOrDefault(obj => obj.Id == id);
        

        if (motor == null)
            return NotFound();

        return Ok(motor);
       
    }



    [Route("{id}")]
    [HttpDelete]
    public IActionResult DeleteMotor(int id)
    {
        var motor = storeContext.Motors.Find(id);
        if (motor == null)
            return NotFound();

        //motor verwijderen ..
        storeContext.Motors.Remove(motor);
        storeContext.SaveChanges();
     
        //Standaard response 204 bij een gelukte delete
        return NoContent();
    }

    [HttpPost]
    public IActionResult CreateMotor([FromBody] Motor newMotor)
    {
        //motor toevoegen in de databank, Id wordt dan ook toegekend
        storeContext.Motors.Add(newMotor);
        storeContext.SaveChanges();
        // Stuur een result 201 met de motor als content
        return Created("", newMotor);
    }

    [HttpPut]
    public IActionResult UpdateMotor([FromBody] Motor updateMotor)
    {
         var orgMotor = storeContext.Motors.Find(updateMotor.Id);
        if (orgMotor == null)
            return NotFound();

        orgMotor.Brand = updateMotor.Brand;
        orgMotor.Name = updateMotor.Name;
        orgMotor.CilinderSize = updateMotor.CilinderSize;
        orgMotor.HorsePower = updateMotor.HorsePower;
        orgMotor.Price = updateMotor.Price;

        storeContext.SaveChanges();
        return Ok(orgMotor);
    }
}


}

