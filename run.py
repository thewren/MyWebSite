#
# <( 'v' )> Work in Progress <( 'v' )>
#

import config

import webapp2
import jinja2


class Home(webapp2.RequestHandler):
	
	def get(self):

		test = '#333'

		template = config.JINJA_ENVIRONMENT.get_template('templates/home.html')
		return self.response.write(template.render(test = test))

class Other(webapp2.RequestHandler):
	
	def get(self):

		test = '#777'

		template = config.JINJA_ENVIRONMENT.get_template('templates/other.html')
		return self.response.write(template.render(test = test))

#
# Run the application
#

application = webapp2.WSGIApplication([

	('/', Home),
	('/other', Other)

])