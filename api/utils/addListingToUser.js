var knex = require('./connection')

function addListingToUser(action, userId, listingId, formData) {
  switch(action) {
    case 'rent':
      return knex('listings')
        .returning('listing_ID')
        .where('listing_ID', listingId)
        .update({
          renter_ID: userId
        })
        .then(function(listingId) {
          return listingId
        })
      break
    case 'upload':
      return knex('listings')
        .returning('listing_ID')
        .insert({
          heading: formData.heading.value,
          listerName: formData.listerName.value,
          description: formData.description.value || 'There is no description for this listing',
          city: formData.city.value,
          suburb: formData.suburb.value,
          size: formData.size.value || 'Unknown',
          price: formData.price.value,
          url: formData.url.value || 'http://placehold.it/200x140',
          renter_ID: null,
          lister_ID: userId,
          created_at: Date()
        })
      .then(function(listingId){
        return listingId
      })
  }
}

module.exports = addListingToUser
