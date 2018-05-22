using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace motoApi.Model
{
    public class DBInitializer
    {
        public static void Initialize(StoreContext _ctx) {
            _ctx.Database.EnsureCreated();

            if(!_ctx.Helmets.Any() && !_ctx.Motors.Any()) {
                var Motors = new List<Motor>() {
                    new Motor() {
                        Brand = "KTM",
                        Name = "Duke 690",
                        CilinderSize = 690,
                        HorsePower = 60,
                        Price = 7800
                    }
                    , new Motor() {
                        Brand = "Yamaha",
                        Name = "MT-07",
                        CilinderSize = 700,
                        HorsePower = 55,
                        Price = 9000      
                    }, new Motor() {
                        Brand = "Kawasaki",
                        Name = "Z800",
                        CilinderSize = 800,
                        HorsePower = 75,
                        Price = 8300            
                    },
                        new Motor() {
                        Brand = "KTM",
                        Name = "Duke 390",
                        CilinderSize = 390,
                        HorsePower = 45,
                        Price = 6800
                    }
                    , new Motor() {
                        Brand = "Yamaha",
                        Name = "MT-03",
                        CilinderSize = 600,
                        HorsePower = 49,
                        Price = 3500      
                    }, new Motor() {
                        Brand = "Kawasaki",
                        Name = "Z750",
                        CilinderSize = 750,
                        HorsePower = 68,
                        Price = 7950            
                    },
                        new Motor() {
                        Brand = "KTM",
                        Name = "Duke 1290",
                        CilinderSize = 1290,
                        HorsePower = 85,
                        Price = 12000
                    },
                     new Motor() {
                        Brand = "Yamaha",
                        Name = "MT-09",
                        CilinderSize = 900,
                        HorsePower = 80,
                        Price = 11000      
                    }, new Motor() {
                        Brand = "Kawasaki",
                        Name = "Z600",
                        CilinderSize = 600,
                        HorsePower = 58,
                        Price = 6500            
                    }
                };
                var Helmets = new List<Helmet>() {
                    new Helmet() {
                        Brand = "Vinz",
                        Name = "Basic",
                        Type = "Full",
                        Color = "Black",
                        Price = 49

                    },

                      new Helmet() {
                        Brand = "Shark",
                        Name = "Evoline Pro",
                        Type = "System",
                        Color = "Green",
                        Price = 399
                    },
                      new Helmet() {
                        Brand = "Diesel",
                        Name = "Hi-jack",
                        Type = "Jet",
                        Color = "blue",
                        Price = 182
                    },
                        new Helmet() {
                        Brand = "Vinz",
                        Name = "classic",
                        Type = "Full",
                        Color = "green",
                        Price = 65

                    },

                      new Helmet() {
                        Brand = "Shark",
                        Name = "Evoline ",
                        Type = "System",
                        Color = "yellow",
                        Price = 350
                    },
                      new Helmet() {
                        Brand = "Diesel",
                        Name = "Low-jack",
                        Type = "Jet",
                        Color = "purple",
                        Price = 200
                    },
                        new Helmet() {
                        Brand = "Vinz",
                        Name = "retro",
                        Type = "Full",
                        Color = "blue",
                        Price = 90

                    },

                      new Helmet() {
                        Brand = "Shark",
                        Name = "Evoline-2 ",
                        Type = "System",
                        Color = "yellow",
                        Price = 420
                    },
                      new Helmet() {
                        Brand = "Diesel",
                        Name = "mid-jack",
                        Type = "Jet",
                        Color = "blue",
                        Price = 250
                    }
                };

               Helmets.ForEach(element => _ctx.Helmets.Add(element));
               Motors.ForEach(element => _ctx.Motors.Add(element));
                _ctx.SaveChanges();
            }
        }
    }
} 