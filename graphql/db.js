export const people = [
    {
        id: "1",
        name: "Youn Junseok",
        age: 18,
        gender: "female"
    },
    {
        id: "2",
        name: "Hong Kildong",
        age: 17,
        gender: "male"
    },
    {
        id: "3",
        name: "Kim Chulsu",
        age: 19,
        gender: "male"
    },
    {
        id: "4",
        name: "Kim Younghee",
        age: 20,
        gender: "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}