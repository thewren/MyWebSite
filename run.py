#
# <( 'v' )> Work in Progress <( 'v' )>
#

import config

import webapp2
import jinja2

from random import randint






class Home(webapp2.RequestHandler):

	def get(self):



		template = config.JINJA_ENVIRONMENT.get_template('templates/home.html')
		return self.response.write(template.render(randlogo = randint(0, 6)))

class Other(webapp2.RequestHandler):

	def get(self):



		template = config.JINJA_ENVIRONMENT.get_template('templates/other.html')
		return self.response.write(template.render(randlogo = randint(0, 6)))

class Blog(webapp2.RequestHandler):

	def get(self):


		template = config.JINJA_ENVIRONMENT.get_template('templates/blog.html')
		return self.response.write(template.render(randlogo = randint(0, 6)))

class Portfolio(webapp2.RequestHandler):

	def get(self):

		template = config.JINJA_ENVIRONMENT.get_template('templates/portfolio.html')
		return self.response.write(template.render())



#
# Run the application
#

application = webapp2.WSGIApplication([

	('/', Home),
	('/portfolio', Portfolio),
	('/other', Other),
	('/blog', Blog)

])
