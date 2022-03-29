
import {Calendar} from '../imports/db/calendarCollection';


Meteor.methods({
    'calendar.create': function() {
        // check(text, Object);
        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }

        const d = new Date(); // aktuelles Datum wird sariable d zugewiesen

        let year = d.getFullYear();  // Jahr wird aus der Variablen d abgefragt
        let days = []

        // loop to insert 24 objects in array

        for (i=1; i<25; i++) {
            const day = {
                day: i,
                riddle: "",
                viewed: false
            }
            days.push(day)
        }


        calendar = {
            name: "Adventskalender "+ year,
            createdAt: new Date(),
            user: Meteor.user({fields: {'username': 1}}),
            year: year,
            days: days
        }
        Calendar.insert(calendar)


    },

    'calendar.update': function(calendarId, days){
        

        console.table(days);

        Calendar.update(calendarId, {$set: {days}})

        
    },

    
    'calendar.viewed.update': function(calendarId, day){
            Calendar.update({_id: calendarId, "days.day":day}, {$set: {"days.$.riddle": "bla"}});
           
            console.log('hallo '+day);
    
        },
    'deleteCalendar': function(id) {
        console.log("deleteCalendar", id);
        Calendar.remove(id)
    },
    
    
})


