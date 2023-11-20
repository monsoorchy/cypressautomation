//personal loan calculator scenario
describe('EMI Calculator Test for Personal Home Loan', () => {
  it('should validate the EMI bar chart', () => {
    //visit the application using url
    cy.visit('https://emicalculator.net/', {
      chromeWebSecurity: false,
    });

    //navigate to the Personal Loan tab
    cy.get('#personal-loan > a').should('be.visible').click();

    //move the sliders for loan amount, interest rate, and loan term
    cy.get('#loantermslider > .ui-slider-handle').should('be.visible');
    cy.get('#loanamountslider > .ui-slider-handle').type('{rightarrow}'.repeat(25));
    cy.get('#loanamount').should('have.value', '10,00,000');

    cy.get('#loaninterestslider > .ui-slider-handle').should('be.visible');
    cy.get('#loaninterestslider > .ui-slider-handle').type('{rightarrow}'.repeat(4));
    cy.get('#loaninterest').should('have.value', '12');

    cy.get('#loantermslider > .ui-slider-handle').should('be.visible');
    cy.get('#loantermslider > .ui-slider-handle').type('{rightarrow}'.repeat(8));
    cy.get('#loanterm').should('have.value', '5');

    //change the month from the calendar widget
    cy.get('#startmonthyear').click();
    cy.contains('.datepicker-months span', 'Dec').click();

    //count number of bars available
    cy.get('rect.highcharts-point').then((elements) => {
      const actualBarSize = (elements.length - 4)/2;
      cy.log(`Total number of bars ': ${actualBarSize}`);
      expect(actualBarSize).to.be.greaterThan(0);
    });
    
    //mouse hover to bar charts one of the bar
    cy.xpath("//*[name()='rect'][@class='highcharts-point'][2]").first().trigger('mouseover',{ force: true }).wait(1000);

    //get the text content of the tooltip
    cy.get('.highcharts-tooltip tspan').invoke('text').then((tooltipContent) => {
    //readtooltip content
    cy.log('Content of the tool tip :', tooltipContent);
    });
  });
});
