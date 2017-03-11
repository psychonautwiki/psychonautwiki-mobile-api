export default = `
	substances(limit:300) {
	    name
	    url
	    featured
	    addictionPotential
	    crossTolerance
	    dangerousInteraction {
	        name
	    }
	    class {
	        chemical
	        psychoactive
	    }
	    tolerance {
	        full
	        half
	        zero
	    }
	    effects {
	        name
	        url
	    }
	}
` 