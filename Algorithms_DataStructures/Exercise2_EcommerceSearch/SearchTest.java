public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Bag", "Fashion")
        };

        System.out.println("Linear Search:");

        Product result1 = SearchAlgorithms.linearSearch(products, 103);

        if (result1 != null) {
            result1.display();
        } else {
            System.out.println("Product Not Found");
        }

        System.out.println("\nBinary Search:");

        Product result2 = SearchAlgorithms.binarySearch(products, 104);

        if (result2 != null) {
            result2.display();
        } else {
            System.out.println("Product Not Found");
        }
    }
}