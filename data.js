var faker = require("faker");
var users = [];
var gender = ["male", "female"];
var categories = [""];
var locations = [];
var areas = ["DaNang", "NewYork", "Fukuoka", "Nha Trang", "Bali", "Chiba", "Singapore", "Manila", "Taiwan", "ShangHai"];
faker.seed(5);

for (let i = 1; i <= 10; i++) {

    var reviewFoodPoint = faker.random.number({
        min: 1,
        max: 10
    });
    var reviewPlacePoint = faker.random.number({
        min: 1,
        max: 10
    });
    var reviewNewsPoint = faker.random.number({
        min: 1,
        max: 10
    });
    var temp = faker.random.number({
        min: 1000,
        max: 9999
    }) + " ";

    users.push({
        id: i,
        name: faker.name.findName(),
        password: "password",
        gender: faker.helpers.randomize(gender),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        eBankingNumber: (temp + temp + temp + temp).trim(),
        city: faker.address.city(),
    });

    locations.push({
        id: i,
        name: faker.address.city(),
        address: faker.address.streetName(),
        organization: faker.company.companyName(),
        area: faker.helpers.randomize(areas),
        image: faker.image.city(),
        zipCode: faker.address.zipCode(),
        totalReviewPoint: ((reviewFoodPoint + reviewNewsPoint + reviewPlacePoint) / 3).toFixed(1),
        likesOfUserId: generateLike(),
        comments: [{
                userId: faker.random.number({
                    min: 1,
                    max: 10
                }),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                replies: [{
                    userId: faker.random.number({
                        min: 1,
                        max: 10
                    }),
                    content: faker.lorem.paragraph()
                }]
            },
            {
                userId: faker.random.number({
                    min: 1,
                    max: 10
                }),
                content: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                replies: [{
                    userId: faker.random.number({
                        min: 1,
                        max: 10
                    }),
                    content: faker.lorem.paragraph()
                }]
            }
        ],
        price: faker.commerce.price(69696.69, 7777777.77, 2, "đ")
    });

}

function generateLike() {
    var likes = [];
    for (let i = 1; i <= faker.random.number({
            min: 5,
            max: 100
        }); i++) {
        likes.push(faker.random.number({
            min: 1,
            max: 10
        }))
    }
    return [...new Set(likes)];
}

module.exports = () => ({
    users,
    locations,
    areas
})

