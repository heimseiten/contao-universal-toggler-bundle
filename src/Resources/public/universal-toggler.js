document.addEventListener("DOMContentLoaded", function(event) {   
	start();
	
	function start() {
		document.querySelector('body').classList.add('toggler_active')
		document.querySelectorAll('.toggler:not(.widget)').forEach(toggler => {
			setInitialStatus(toggler)	
			changeOnClick( toggler )
		})
	}

	function changeOnClick(toggler) {  
		toggler.addEventListener('mouseup',e => {
			if ( toggler.querySelector('input.checkbox') ) {
				if (e.path[0].tagName!='LABEL' && e.path[0].tagName!='INPUT') { 
					if (toggler.querySelector('input.checkbox').checked) { 
						toggler.querySelector('input.checkbox').checked = false 
					} else { toggler.querySelector('input.checkbox').checked = true }  
				}
			}
			for ( q=0; q<elementsToToggle(toggler).length;q++ ) {
				var cssPath = '.'+elementsToToggle(toggler)[q]+ ':not(.toggler):not(.'+elementsToToggle(toggler)[q]+ ' > .'+elementsToToggle(toggler)[q]+')'
				if ( document.querySelector(cssPath) ) {
					var condition = !document.querySelector(cssPath).classList.contains('t_active')
				}
				switchToActive(condition, cssPath)
			}
		})
	}

	function setInitialStatus(toggler) {  
		for ( t=0; t<elementsToToggle(toggler).length;t++ ) {
			var cssPath = '.'+elementsToToggle(toggler)[t]+ ':not(.toggler):not(.'+elementsToToggle(toggler)[t]+ ' > .'+elementsToToggle(toggler)[t]+')'
			if ( toggler.querySelector('input.checkbox') ) {
				switchToActive(toggler.querySelector('input.checkbox').checked,cssPath)
			} else {
				switchToActive(true,cssPath)
			}
		}
	}
	
	function elementsToToggle(element) {  
		var toggleElements = []
		for (i=0; i<element.classList.length;i++) {
			if (element.classList[i].includes('toggle_')) {
				toggleElements.push(element.classList[i])
			}
		}
		return toggleElements;
	  }

	function switchToActive(condition,selector) {
		if ( document.querySelector(selector) ) {
			if (condition) { 
				document.querySelectorAll(selector).forEach(te => {	
					te.classList.add('t_active')
					te.classList.remove('t_inactive') 
				})
			} 
			else { 
				document.querySelectorAll(selector).forEach(te => {	
					te.classList.remove('t_active')
					te.classList.add('t_inactive') 
				})
			}
		}
	}

});