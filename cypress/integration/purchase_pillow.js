let arr_payment = [
    {
        "cardNumber":"4811 1111 1111 1114",
        "cvvNumber":"123",
        "expiryDate":"02/21",
        "bankOTP":"112233"
    },
    {
        "cardNumber":"4911 1111 1111 1113",
        "cvvNumber":"123",
        "expiryDate":"02/20",
        "bankOTP":"112233"
    }
]


context('User Purchase Pillow', () => {
    beforeEach(() => {
      cy.visit('https://demo.midtrans.com/')
      cy.viewport(1024, 768);
    })


    it('User successfully purchase pillow with highest promo value', () =>{

        const getIframeDocumentPayment = () => {
            return cy
            .get('iframe[id="snap-midtrans"]')
            .its('0.contentDocument').should('exist')
          }

        const getIframeBodyPayment = () => {
            // get the document
            return getIframeDocumentPayment()
            // automatically retries until body is loaded
            .its('body').should('not.be.undefined')
            .then(cy.wrap)
          }
        
        //user click button BUY NOW
        cy.get('.btn.buy').should('have.text','BUY NOW').click()
        .get('.cart-checkout').should('have.text','CHECKOUT').click()

        //interact with 1st iframe modals
        getIframeBodyPayment().find('.text-button-main').should('have.text', 'Continue').click({force:true})
        getIframeBodyPayment().find('.list-content').eq(0).click({force:true})
        getIframeBodyPayment().find('input[name="cardnumber"]').click({force:true})
        .type(arr_payment[0].cardNumber)
        getIframeBodyPayment().find('input[type="tel"]').eq(1).should('have.attr','placeholder','MM / YY').click({force:true})
        .type(arr_payment[0].expiryDate)
        getIframeBodyPayment().find('input[type="tel"]').eq(2).should('have.attr','placeholder','123').click({force:true})
        .type(arr_payment[0].cvvNumber)
        //assert selected promo
        getIframeBodyPayment().find('input[name="promo"]').eq(1).should('have.value','on')
        getIframeBodyPayment().find('.checkbox.checkbox-left').children('label').eq(1).should('have.text','Potongan 10% - Demo Promo Engine- Rp 2,000')
        getIframeBodyPayment().find('.text-button-main').should('have.text','Pay Now').click({force:true})
    
    })

    it('User successfully purchase pillow with lowest promo value', () =>{

        const getIframeDocumentPayment = () => {
            return cy
            .get('iframe[id="snap-midtrans"]')
            .its('0.contentDocument').should('exist')
          }

        const getIframeBodyPayment = () => {
            // get the document
            return getIframeDocumentPayment()
            // automatically retries until body is loaded
            .its('body').should('not.be.undefined')
            .then(cy.wrap)
          }
        
        //user click button BUY NOW
        cy.get('.btn.buy').should('have.text','BUY NOW').click()
        .get('.cart-checkout').should('have.text','CHECKOUT').click()

        //interact with 1st iframe modals
        getIframeBodyPayment().find('.text-button-main').should('have.text', 'Continue').click({force:true})
        getIframeBodyPayment().find('.list-content').eq(0).click({force:true})
        getIframeBodyPayment().find('input[name="cardnumber"]').click({force:true})
        .type(arr_payment[0].cardNumber)
        getIframeBodyPayment().find('input[type="tel"]').eq(1).should('have.attr','placeholder','MM / YY').click({force:true})
        .type(arr_payment[0].expiryDate)
        getIframeBodyPayment().find('input[type="tel"]').eq(2).should('have.attr','placeholder','123').click({force:true})
        .type(arr_payment[0].cvvNumber)
        getIframeBodyPayment().find('input[name="promo"]').eq(0).click()
        //assert selected promo
        getIframeBodyPayment().find('input[name="promo"]').eq(0).should('have.value','on')       
        getIframeBodyPayment().find('.checkbox.checkbox-left').children('label').eq(0).should('have.text','Potongan 10 Rupiah- Rp 10')
        getIframeBodyPayment().find('.text-button-main').should('have.text','Pay Now').click({force:true})
        
    
    })


    it('User failed to purchase', () =>{

        const getIframeDocumentPayment = () => {
            return cy
            .get('iframe[id="snap-midtrans"]')
            .its('0.contentDocument').should('exist')
          }

        const getIframeBodyPayment = () => {
            // get the document
            return getIframeDocumentPayment()
            // automatically retries until body is loaded
            .its('body').should('not.be.undefined')
            // wraps "body" DOM element to allow
            // chaining more Cypress commands, like ".find(...)"
            .then(cy.wrap)
          }
        
        //user click button BUY NOW
        cy.get('.btn.buy').should('have.text','BUY NOW').click()
        .get('.cart-checkout').should('have.text','CHECKOUT').click()

        //interact with 1st iframe modals
        getIframeBodyPayment().find('.text-button-main').should('have.text', 'Continue').click({force:true})
        getIframeBodyPayment().find('.list-content').eq(0).click({force:true})
        getIframeBodyPayment().find('input[name="cardnumber"]').click({force:true})
        .type(arr_payment[1].cardNumber)
        getIframeBodyPayment().find('input[type="tel"]').eq(1).should('have.attr','placeholder','MM / YY').click({force:true})
        .type(arr_payment[1].expiryDate)
        getIframeBodyPayment().find('input[type="tel"]').eq(2).should('have.attr','placeholder','123').click({force:true})
        .type(arr_payment[1].cvvNumber)
        //assert selected promo
        getIframeBodyPayment().find('input[name="promo"]').eq(1).should('have.value','on')
        getIframeBodyPayment().find('.text-button-main').should('have.text','Pay Now').click({force:true})
        //assert error display
        getIframeBodyPayment().find('.input-group.col-xs-7.error').should('be.visible')
        
    })

})