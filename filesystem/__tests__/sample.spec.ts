describe('Object.getPrototypeOf', (): void => {
    it('works fine with a regular anonymous object', (): void => {
      expect.assertions(1);
  
      expect(Object.getPrototypeOf({}) === Object.prototype).toBe(true);
    });
  
    it('works fine with JSON.parse', (): void => {
      expect.assertions(1);
  
      expect(Object.getPrototypeOf(JSON.parse('{}')) === Object.prototype).toBe(true);
    });
  
    it('should work with Response.json()', async (): Promise<void> => {
      expect.assertions(1);
  
      const json: unknown = await (new Response(JSON.stringify({}))).json();
  
      expect(Object.getPrototypeOf(json) === Object.prototype).toBe(true);
    });
  
    it('should work when using a fetch result', async (): Promise<void> => {
      expect.assertions(1);
  
      const response: Response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  
      const json: unknown = await response.json();
  
      expect(Object.getPrototypeOf(json) === Object.prototype).toBe(true);
    });

    it('should work with instanceof Object', async (): Promise<void> => {
        expect.assertions(1);

        const json: unknown = await (new Response(JSON.stringify({}))).json();

        expect(json instanceof Object).toBe(true);
    });
  });
  
