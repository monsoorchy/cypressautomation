//user api scenario
describe('API Test', () => {
  //variable to store the fixture data
  let userData; 

  //load the fixture data using before hook
  before(() => {
  cy.fixture('users').then((data) => {
    userData = data;
    });
  });

  it('validate API parameters', () => {
  //access the API using GET call
  cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
    
  //verify response status code
    expect(response.status).to.eq(200);

  //store response body data
    const responseData =  response.body.data;

  //validate "ID", "email", "first_name", "last_name" for all users
  responseData.forEach((user) => {
      //get matching user data from the fixture
      const expectedUser = userData.data.find((expected) => expected.id === user.id);
      //check if the expected user is found
      if (expectedUser) {
        //assert deep equals
        expect(user).to.deep.eq(expectedUser);
        //assert each user's property
        assertUserProperty(user.id,expectedUser.id);
        assertUserProperty(user.email,expectedUser.email);
        assertUserProperty(user.first_name,expectedUser.first_name);
        assertUserProperty(user.last_name,expectedUser.last_name);
      } else {
        //log if no matching user is found in the fixture data
        cy.log(`No such user found in fixture data for user with ID ${user.id}`);
      }
      });
    });
  });
  function assertUserProperty(actual, expected) {
    expect(actual).to.eq(expected);
  }
});
