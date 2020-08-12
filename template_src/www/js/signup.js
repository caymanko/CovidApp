//  =========================            


        function pushButton() {
                  document.querySelector('#myNavigator').pushPage('second');             
            };

        function pushButton2() {
                  document.querySelector('#myNavigator').pushPage('third');             
            };

        function pushButton3() {
                  document.querySelector('#myNavigator').pushPage('template-signup');             
            };

        function pushButtonDash() {
                  document.querySelector('#myNavigator').pushPage('tabbar-template');

                // hides dialog
                document.getElementById('booking-dialog').hide();
            
            };



// ========================= FORM SUBMISSION =========================

            
            //  SUBMIT

            function toggleSubmit(target){

                // currently the submit is only checking for the terms
                // but you'd also want to check for other required field elements
                document.querySelector('#submitBtn').disabled = !target.checked;
            }

            function submitBooking(){

                var page = document.getElementById('page-signup');

                // first get the spinner modal and show it
                var spinnerModal = document.querySelector('#spinner-modal');                
                spinnerModal.show();

                // then build the object (just partially shown here)
                var bookingData = {

                    guestName: page.querySelector('#firstName').value,
                                        
                }

                // SPINNER SIMULATES DATA TO END POINT
                setTimeout(function() {
                    spinnerModal.hide();

                    // get the reply dialog
                    var bookingDialog = document.getElementById('booking-dialog');

                    // we have to create it and append it to the dom                
                    ons.createElement('booking-confirm-template', { append: true })
                        .then(function(bookingDialog) {
                            // set the display data

                        
                            bookingDialog.querySelector('#firstName').innerHTML = '<span class="dialog-em">' + bookingData.guestName + '</span>';
                            

                            bookingDialog.show();
                        });
                    
                }, 800);                
                
            }
