/**
 * Created by Jeroen on 15/04/2017.
 */
Vue.component('trip-info', {
    prop: ['trip'],
    template: `
        <!-- trip-info -->
        <div id="TripInfo">
            <p>Start the planning of your trip hear. Invite your friends and start your trip!</p>
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="tripTitle" type="text" v-model="form.title" class="validate">
                            <label for="tripTitle">Trip title</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="Location" type="text" v-model="form.location" class="validate">
                            <label for="Location">Location</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <input type="date" id="formDate" v-model="form.from" class="datepicker">
                            <label for="formDate">From</label>
                        </div>
                        <div class="input-field col s6">
                            <input type="date" id="tillDate" v-model="form.till" class="datepicker">
                            <label for="tillDate">Till</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="file-field input-field col s6">
                            <div class="btn">
                                <span>Image</span>
                                <input type="file">
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" v-model="form.img" type="text">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="row">
                <div class="col s12 padding">
                    <div id="TripChips" class="chips chips-autocomplete"></div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 padding" style="text-align: right">
                    <a class="waves-effect waves-light btn"><i class="material-icons left">save</i>Save</a>
                    <a class="waves-effect waves-light btn"><i class="material-icons left">delete</i>Delete</a>
                </div>
            </div>
        </div>
    `,
    data: function() {
        return {
            form: {}
        }
    }
});