const Potion = require('../lib/Potion');

test('creates a health potion object', () => {
    // const potion = new Potion('health'); //new is used to create a new object

    // expect(potion.name).toBe('health');
    // expect(potion.value).toEqual(expect.any(Number));

    //We want the enemy to drop a random Potion eventually. So we write the function below. 

    const potion = new Potion(); 

    expect(potion.name).toEqual(expect.any(String)); 
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});