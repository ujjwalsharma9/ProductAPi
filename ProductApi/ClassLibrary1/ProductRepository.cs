using ProductApi.core.Entities;
using ProductApi.core.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1
{
    public class ProductRepository : IProductRepository
    {
        ProductContext context = new ProductContext();
        public void Add(Product p)
        {
            context.Products.Add(p);
            context.SaveChanges();
        }

        public void Edit(Product p)
        {
            context.Entry(p).State = System.Data.Entity.EntityState.Modified;
            context.SaveChanges();
        }

        public void Delete(string ProductID)
        {
            Product p = context.Products.Find(ProductID);
            context.Products.Remove(p);
            context.SaveChanges();
        }

        public IEnumerable<Product> GetProducts()
        {
            return context.Products;
        }

        public Product GetById(string ProductID)
        {
            var product = (from r in context.Products where r.ProductID == ProductID select r).FirstOrDefault();

            return product;
        }
    }
}
   
