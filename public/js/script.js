new Vue({
  
  el: '#app',
  
  data: {
    phoneNumber: '',
    isDisabledInput: '',
    modalClass: 'modal',
    isActiveClass: ''   // is-active
  },

  methods: {

  	comprobarNumero() {
  		if(this.phoneNumber.length >= 10) {
  			document.getElementById('input').readOnly = true;
  			this.isActiveClass = 'is-active';
  		}
  	}

  }

})