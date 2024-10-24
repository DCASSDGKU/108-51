

const catalog = [
    {
        title:"Tomatoes",
        image:"Tomato.jpg",
        price:3.99,
        category:"vegetables",
        _id:"12345"
    },
    {
        title:"Atlantic Starr",
        image:"Atlantic Starr Collection.jpg",
        price:4.99,
        category:"Music",
        _id:"12346"
    },
    {
        title:"Spinach",
        image:"Spinach.jpg",
        price:5.99,
        category:"Vegetables",
        _id:"12347"
    },
    {
        title:"LEVI'S",
        image:"Denim.jpg",
        price:6.99,
        category:"Clothing",
        _id:"12348"
    },
    {
        title:"MEGAVOX",
        image:"VCR.jpg",
        price:7.99,
        category:"Electronics",
        _id:"12344"
    },
    {
        title:"Kool Aid",
        image:"KoolAid.jpg",
        price:8.99,
        category:"Beverages",
        _id:"12425"
    },
];

class DataService{
    getProducts(){
        return catalog;
    }

    getCategories() {
        return ["Fruits", "Vegetable", "Music", "Electronics", "Beverages", "Clothing"];
        
    }
}

export default DataService;

