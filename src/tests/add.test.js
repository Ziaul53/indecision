const add = (a,b) => a+b+3;

test('hello add two', ()=>{
 const result = add(1,3);
 
 expect(result).toBe(7);
 
});