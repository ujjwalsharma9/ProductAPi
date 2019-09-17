using ProductApi.core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductApi.core.Repository
{
    public interface IProductRepository
    {

        void Add(Product p);

        void Edit(Product p);

        void Delete(string ProductID);

        Product GetById(string ProductID);

        IEnumerable<Product> GetProducts();
    }
}
