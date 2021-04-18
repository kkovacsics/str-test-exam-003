const customerList = [{ "id": 1, "name": "Janeva Ciccone", "email": "jciccone0@instagram.com", "rating": 3, "address": "3943 Thackeray Junction" },
{ "id": 2, "name": "Cesar Fernant", "email": "cfernant1@wunderground.com", "rating": 4, "address": "2809 Truax Plaza" },
{ "id": 3, "name": "Gwenora Standing", "email": "gstanding2@shutterfly.com", "rating": 4, "address": "534 Rieder Crossing" },
{ "id": 4, "name": "Fields Ferneley", "email": "fferneley3@gnu.org", "rating": 5, "address": "8 Sloan Alley" },
{ "id": 5, "name": "Shell Habbin", "email": "shabbin4@eepurl.com", "rating": 4, "address": "7586 Coolidge Point" },
{ "id": 6, "name": "Jaime Briscoe", "email": "jbriscoe5@mashable.com", "rating": 3, "address": "74055 Loomis Terrace" },
{ "id": 7, "name": "Phyllys Mattiazzi", "email": "pmattiazzi6@dot.gov", "rating": 5, "address": "02855 Crownhardt Drive" },
{ "id": 8, "name": "Bartolomeo Boken", "email": "bboken7@cargocollective.com", "rating": 4, "address": "9762 Hoffman Drive" },
{ "id": 9, "name": "Sylvester Merrill", "email": "smerrill8@arizona.edu", "rating": 3, "address": "20216 Mcbride Hill" },
{ "id": 10, "name": "Lin Surmon", "email": "lsurmon9@myspace.com", "rating": 3, "address": "4949 Memorial Way" }
];

/**
 * azoknak a customer -eknek a nevét (CSAK A NEVÉT) kell visszaadnia egy tömbben, 
 * amelyek name tulajdonságában szerepel a kapott szövegrészlet és 
 * rating -juk LEGALÁBB annyi mint a kapott rating.
 */
const customerFilter = (list, name, rating) => {
    return list
            .filter(item => item.name.includes(name) && item.rating>=rating)
            .map(item => item.name);
};

if (typeof module !== 'undefined') {
    module.exports = {
        customerList,
        customerFilter,
    };
}
