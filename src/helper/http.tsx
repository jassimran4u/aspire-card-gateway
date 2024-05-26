export const getFn = (apiUrl:string, queryParams:object, headers:object) => {
    /* return fetch(`${apiUrl}${queryParams}`, {
        method: 'GET',
        headers: headers
    }); */
    if(apiUrl === 'getCards') {
        return Promise.resolve({
            json: () => [
                { name: 'Mark Henry', cardNumber: '7377466689992020', validity: '12/20', cvv: '***', cardScheme: 'VISA' , isFreezed:false },
                { name: 'Jane Doe', cardNumber: '1234567812345678', validity: '11/23', cvv: '***', cardScheme: 'MasterCard' , isFreezed:false },
                { name: 'John Smith', cardNumber: '8765432187654321', validity: '09/21', cvv: '***', cardScheme: 'VISA', isFreezed:false },
            ]
        });
    }
}