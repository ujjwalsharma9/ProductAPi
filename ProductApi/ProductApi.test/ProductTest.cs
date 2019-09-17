using System;
using System.Linq;
using ClassLibrary1;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace ProductApi.test
{
    [TestClass]
    public class ProductTest
    {
        ProductRepository repo;

        [TestInitialize]
        public void TestSetUp()
        {

            ProductInitializeDb db = new ProductInitializeDb();
            System.Data.Entity.Database.SetInitializer(db);
            repo = new ProductRepository();
        }


        [TestMethod]
        public void IsRepositoryInitalizeWithValidNumberOfData()
        {
            var result = repo.GetProducts();
            Assert.IsNotNull(result);
            var numberOfRecords = result.ToList().Count;
            Assert.AreEqual(2, numberOfRecords);
        }
    }
}
