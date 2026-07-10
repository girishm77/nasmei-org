var sublimeStripeVue = new Vue({
    el: "#vue-stripe-app",

    components: {
        'sa-stripe-checkout-form': {

            data: function () {
                return {
                    stripeEmail: '',
                    stripeToken: '',
                    plan: {}
                }
            },

            template: '#sa-stripe-checkout-form-template',

            created: function () {
                
                this.stripe = StripeCheckout.configure({
                    key: window.SublimeStripeData.stripeKey,
                    image: "http://138.197.78.19/themes/nasmei/assets/images/nasmei-logo.jpg",
                    email: window.SublimeStripeData.loggedEmail,
                    locale: "auto",
                    token: function (token) {
                        this.stripeEmail = token.email;
                        this.stripeToken = token.id;

                        this.$http.post(window.SublimeStripeData.baseUrl + '/checkout', this.$data).then(
                            // Success
                            function (response) {
                                alert(response.body);
                                document.location.replace(window.SublimeStripeData.redirectUrl);
                            },
                            // Failure
                            function(response) {
                                alert(response.body);
                            });
                    }.bind(this)
                });
            },

            methods: {
                checkout: function () {
                    var buttonLabel;

                    (this.plan.type == 'recurring')
                        ? buttonLabel = 'Subscribe for'
                        : buttonLabel = 'Buy now for';

                    this.stripe.open({
                        name: this.plan.name,
                        description: this.plan.description,
                        panelLabel: buttonLabel,
                        zipCode: true,
                        amount: this.plan.amount * 100
                    });
                }
            }

        }
    }
});
