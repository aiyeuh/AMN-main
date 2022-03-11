<template>
  <div id="dashboard">
    <b-container class="cardreport">
      <b-row>
        <b-col>
          <b-card class="ticketsolvedcard1">
            <b-card-title class="titlecard1">Ticket Solved</b-card-title>
            <b-card-text><SolvedTicketcard /></b-card-text> </b-card
        ></b-col>
        <b-col>
          <b-card class="ticketsolvedcard2">
            <b-card-title>Ticket Incoming</b-card-title>
            <b-card-text>
              <TicketIncoming />
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="ticketsolvedcard3">
            <b-card-title>Incoming Message</b-card-title>
            <b-card-text>
              <Messagecard />
            </b-card-text> </b-card
        ></b-col>
      </b-row>
    </b-container>
    <br />
    <br />
    <b-container class="chartreport">
      <b-row>
        <b-col>
          <b-card class="ticketsolvedchart">
            <b-card-title>Report Ticket</b-card-title>
            <b-card-text><Ticketsolvedchart /> </b-card-text>
            <b-card-footer class="small text-muted"
              >Last updated 3 mins ago</b-card-footer
            >
          </b-card>
        </b-col>
        <b-col>
          <b-card class="unreadmsg">
            <b-card-title>Inbox</b-card-title>
            <b-card-text><Massagenotif /> </b-card-text>
            <b-card-text class="small text-muted"
              >Last updated 3 mins ago</b-card-text
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="contain3">
      <b-row>
        <b-col>
          <b-card class="line3">
            <b-card-title>Upcoming Ticket</b-card-title>
            <b-card-text><UpcomingTicket /> </b-card-text>
            <b-card-text class="small text-muted"
              >Last updated 3 mins ago</b-card-text
            >
          </b-card>
        </b-col>
        <b-col>
          <b-card class="line3">
            <b-card-title>System Report</b-card-title>
            <b-card-text><SystemReport /> </b-card-text>
            <b-card-text class="small text-muted"
              >Last updated 3 mins ago</b-card-text
            >
          </b-card>
        </b-col>
        <b-col>
          <b-card class="line3">
            <b-card-title>Activity Timeline</b-card-title>
            <b-card-text><ActivityTimeline /></b-card-text>
            <b-card-text class="small text-muted"
              >Last updated 3 mins ago</b-card-text
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col>
          <b-card class="manhour">
            <b-card-title>Man Hour</b-card-title>
            <b-card-text><ManHour /> </b-card-text>
            <b-card-footer class="small text-muted"
              >Last updated 3 mins ago</b-card-footer
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Ticketsolvedchart from "../components/Dashboard/Ticketsolvedchart.vue";
import SolvedTicketcard from "../components/Dashboard/SolvedTicketcard.vue";
import TicketIncoming from "../components/Dashboard/TicketIncoming.vue";
import Messagecard from "../components/Dashboard/Messagecard.vue";
import Massagenotif from "../components/Dashboard/Massagenotif.vue";
import UpcomingTicket from "../components/Dashboard/UpcomingTicket.vue";
import SystemReport from "../components/Dashboard/SystemReport.vue";
import ActivityTimeline from "../components/Dashboard/ActivityTimeline.vue";

export default {
  components: {
    Ticketsolvedchart,
    SolvedTicketcard,
    TicketIncoming,
    Messagecard,
    Massagenotif,
    UpcomingTicket,
    SystemReport,
    ActivityTimeline,
  },
};
</script>

<style>
/* card */
.ticketsolvedcard1 {
  height: 150px;
  width: 300px;
  box-shadow: 3px 4px 10px rgb(104, 104, 104);
  color: whitesmoke;
  margin-top: 90px;
  background: linear-gradient(rgba(0, 46, 250, 0.9), rgba(153, 0, 255, 0.9));
}
.ticketsolvedcard2 {
  height: 150px;
  width: 300px;
  box-shadow: 3px 4px 10px rgb(104, 104, 104);
  color: whitesmoke;
  margin-top: 90px;
  background: linear-gradient(rgba(250, 0, 196, 0.9), rgb(174, 0, 255, 0.9));
}
.ticketsolvedcard3 {
  height: 150px;
  width: 300px;
  box-shadow: 3px 4px 10px rgb(104, 104, 104);
  color: whitesmoke;
  margin-top: 90px;
  background: linear-gradient(rgba(87, 0, 250, 0.9), rgb(255, 0, 255, 0.9));
}

/* chart */
.ticketsolvedchart {
  box-shadow: 3px 4px 10px rgb(104, 104, 104);
  width: 735px;
  height: 573px;
}
.unreadmsg {
  box-shadow: 3px 4px 10px rgb(104, 104, 104);
  width: 450px;
  margin-left: 23px;
  height: 573px;
}
.line3 {
  box-shadow: 3px 4px 10px rgb(104, 104, 104);
  width: 355px;
  height: 573px;
}
#dashboard {
  background-color: beige;
}
.contain3 {
  margin-top: 55px;
}
.manhour {
  box-shadow: 3px 4px 10px rgb(104, 104, 104);
  margin-top: 55px;
  width: 1235px;
  height: 573px;
}
</style>
