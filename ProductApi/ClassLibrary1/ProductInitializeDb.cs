using ProductApi.core.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1
{
    public class ProductInitializeDb: DropCreateDatabaseIfModelChanges<ProductContext>
    {
        protected override void Seed(ProductContext context)
        {
            context.Products.Add(new Product
            {
                ProductID = "1",
                Color = "Red",
                Details = "This ia an awesome Product",
                ExpiryDate = DateTime.Now,
                imgUrl = "abc.jpg",
                inStock = true,
                Price = 400,
                Quantity = 50,
                Rating = 4,
                Title = "Hammer"

            });

            context.Products.Add(new Product
            {
                ProductID = "2",
                Color = "Blue",
                Details = "This ia a very awesome Product",
                ExpiryDate = DateTime.Now,
                imgUrl = "abghc.jpg",
                inStock = false,
                Price = 300,
                Quantity = 100,
                Rating = 5,
                Title = "Saw"

            });


            base.Seed(context);
        }

    }
}
