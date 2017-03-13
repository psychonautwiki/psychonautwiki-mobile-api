module.exports = `
{
	substances(limit:300) {
	    name
	    url
	    summary
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
}
`;