import React from "react";

import "./Mycalendar.css";

const Mycalendar = () => {
  return (
    <>
      <div class="wrapper wrapper-content animated fadeIn page-pad">
        <div class="container-fluid lg-container-fluid">
          <div class="row shadow    mx-3  bg-white rounded">
            <div class="col-12 flex-item  ">
              <div class="ibox ibox-content h-100 py-0">
                <div class="row h-100">
                  <div class="col-md-5 col-sm-12 col-12 flex-item">
                    <div class="p-5">
                      <h3 className="w-100">Make Your Custom Calendar</h3>
                      <p>Make Events. Set Repitition. Set Reminders.</p>
                      <div class=" mt-3">
                        <button type="button" class="btn btn-danger">
                          Create Calendar Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-7 col-sm-12 col-12 flex-item detail-img"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="ibox ibox-content ">
            <div class="mail-box-header border-0 p-0">
              <h1 class="mt-1 p-4 text-danger">Calendars in Mero_calendar</h1>
            </div>
            <hr class="m-0 mb-2" />
            <div class="col text-justify p-0">
              <p class="my-3 text-sm  py-3">
                We have been providing you with information on different Nepali
                events and important days. Now, You can create your personal
                calendars to store your own single or repititive events.
              </p>
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-6 flex-item my-5">
                  <div class="h-100">
                    <div class="card-body text-center">
                      <img
                        class="detail-icon mb-2"
                        src="https://nepalipatro.com.np/static/media/create_cal.8ed80462.svg"
                        alt="poster"
                        title="Create New Calendar"
                      />
                      <h4>Create New Calendar</h4>
                      <p class="mb-0">
                        Create your own calendar with your own events. Access it
                        anywhere.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 flex-item my-5">
                  <div class="h-100">
                    <div class="card-body text-center">
                      <img
                        class="detail-icon mb-2"
                        src="https://nepalipatro.com.np/static/media/add_event.86ed3217.svg"
                        alt="poster"
                        title="Add Events"
                      />
                      <h4>Add Events</h4>
                      <p class="mb-0">
                        Have an event coming? Choose calendar, choose date, add
                        the event and add details. Add events by BS date.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 flex-item my-5">
                  <div class="h-100">
                    <div class="card-body text-center">
                      <img
                        class="detail-icon mb-2"
                        src="https://nepalipatro.com.np/static/media/repeat.9ae68d1f.svg"
                        alt="poster"
                        title="Recurring Events"
                      />
                      <h4>Recurring Events</h4>
                      <p class="mb-0">
                        Have repeating events every day? week? month? year?
                        Repeat based on Tithi? We got it right.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 flex-item my-5">
                  <div class="h-100">
                    <div class="card-body text-center">
                      <img
                        class="detail-icon mb-2"
                        src="https://nepalipatro.com.np/static/media/add_reminder.9d9e4fac.svg"
                        alt="poster"
                        title="Add Reminders"
                      />
                      <h4>Add Reminders</h4>
                      <p class="mb-0">
                        Never miss an event. Set reminders and get notified in
                        mail or your own browser. (Must allow pop-up
                        notification for browser notifications)
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 flex-item my-5">
                  <div class="h-100">
                    <div class="card-body text-center">
                      <img
                        class="detail-icon mb-2"
                        src="https://nepalipatro.com.np/static/media/edit.e7b70341.svg"
                        alt="poster"
                        title="Update Events"
                      />
                      <h4>Update Events</h4>
                      <p class="mb-0">
                        Change in plan? Recehedule or update it. Canceled plan?
                        Just delete it.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 flex-item my-5">
                  <div class="h-100">
                    <div class="card-body text-center">
                      <img
                        class="detail-icon mb-2"
                        src="https://nepalipatro.com.np/static/media/sort.4f6e0fc3.svg"
                        alt="poster"
                        title="Sort Your Events"
                      />
                      <h4>Sort Your Events</h4>
                      <p class="mb-0">
                        Sort your calendar. Prioritize your events. Stay on top.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 flex-item my-5">
                  <div class="h-100">
                    <div class="card-body text-center">
                      <img
                        class="detail-icon mb-2"
                        src="https://nepalipatro.com.np/static/media/showhide.fe0affbd.svg"
                        alt="poster"
                        title="Filter Calendars"
                      />
                      <h4>Filter Calendars</h4>
                      <p class="mb-0">
                        Lots of calendars and lots of events? Filter them.
                        Choose which to show, which to hide.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 flex-item my-5">
                  <div class="h-100">
                    <div class="card-body text-center">
                      <img
                        class="detail-icon mb-2"
                        src="https://nepalipatro.com.np/static/media/delete.9ab9bd64.svg"
                        alt="poster"
                        title="Remove Calendars/Events"
                      />
                      <h4>Remove Calendars/Events</h4>
                      <p class="mb-0">
                        Changed your mind? Don't need your calendar anymore?
                        Delete it. All your events and calendars.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mycalendar;
