//home loan calculator scenarios
describe('EMI Calculator test for Pie Chart', () => {
  it('calculate EMI from the calculator and validate pie chart', () => {
    //test data
    const testDatas = [
      { homeLoanAmount: '2500000', interestRate: '10', tenure: '10'},
      { homeLoanAmount: '5000000', interestRate: '7.5', tenure: '15'},
    ];

    testDatas.forEach((testData) => {
      //visit the application using url
      cy.visit('https://emicalculator.net/', {
          chromeWebSecurity: false,
        });

      //fill the form and check the value
      cy.get('#loanamount').clear().type(testData.homeLoanAmount).type("{enter}");
      cy.get('#loanamount').should('have.value',testData.homeLoanAmount);
      cy.get('#loaninterest').clear().type(testData.interestRate).type("{enter}");
      cy.get('#loaninterest').should('have.value',testData.interestRate);
      cy.get('#loanterm').clear().type(testData.tenure).type("{enter}");
      cy.get('#loanterm').should('have.value',testData.tenure); 

      //check if the pie chart is visible
      cy.get('rect.highcharts-plot-background').should('be.visible');

      //read the number from pie chart
      cy.get('.highcharts-data-label-color-0 >text > tspan')
      .invoke('text')
      .then(value => {
        //get the string value and convert to float
        const pieChartValue1 = parseFloat(value.replace('%', ''));

        //display the extracted value
        cy.log('Extracted Float Value:', pieChartValue1);

        //assert that the float greater than zero
        expect(pieChartValue1).to.be.a('number').and.to.be.greaterThan(0);
      });

      cy.get('.highcharts-data-label-color-1 >text > tspan')
      .invoke('text')
      .then(value => {
        //get the string value and convert to float
        const pieChartValue2 = parseFloat(value.replace('%', ''));

        //display the extracted value
        cy.log('Extracted Float Value:', pieChartValue2);

        //assert that the float greater than zero
        expect(pieChartValue2).to.be.a('number').and.to.be.greaterThan(0);
      });
    });
  });
});
