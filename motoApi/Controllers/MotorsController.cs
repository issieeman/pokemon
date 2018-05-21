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

    [Route("{id}")]   // api/v1/motors/2
    [HttpGet]
    public Motor GetMotor(int id)
    {
        var motor = storeContext.Motors.Single(obj => obj.Id == id);
        return (Motor)motor;
       
    }

    [HttpGet]         // api/v1/motors
    public List<Motor> GetAllMotors()
    {
        return storeContext.Motors.ToList();
    }

    [Route("{id}")]
    [HttpDelete]
    public IActionResult DeleteMotor(int id)
    {
        var delete = storeContext.Motors.Single(d => d.Id == id);
        storeContext.Motors.Remove(delete);
        storeContext.SaveChanges();
     
        //motor verwijderen ..
        return NoContent();
    }

    [HttpPost]
    public IActionResult CreateMotor([FromBody] Motor newMotor)
    {
        //motor toevoegen in de databank, Id wordt dan ook toegekend
        newMotor.Id = 3;
        // Stuur een result 201 terug met daarin het aangemaakte object  
        return Created("", newMotor);
        // Alternatief met url naar action om deze resource op te halen
        // return CreatedAtAction(nameof(GetBook), new { id = newBook.Id }, newBook);
    }

  /*  [HttpPut]
    public IActionResult UpdateMotor([FromBody] Motor updateMotor)
    {
       var orgmotor = list.FirstOrDefault(d => d.Id == updateMotor.Id);
        if(orgmotor == null)
            return NotFound();

        orgmotor.Brand = updateMotor.Brand;
        orgmotor.Name = updateMotor.Name;
        orgmotor.CilinderSize = updateMotor.CilinderSize;
        orgmotor.HorsePower = updateMotor.HorsePower;
        orgmotor.Price = updateMotor.Price;
        
        return Ok(orgmotor);
    }*/
}


}

