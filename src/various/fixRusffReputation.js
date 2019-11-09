// @flow
declare var FORUM: Object;

function fixRusffReputation() {
  const reputation = document.getElementById("pun-reputation");

  if (!reputation) {
    FORUM.PartnerVote = function() {
      return true;
    };
  }
}

export default function fixRusffReputationIssue() {
  const topic = document.getElementById("pun-viewtopic");

  if (topic) {
    if (document.readyState !== "complete") {
      document.addEventListener("DOMContentLoaded", fixRusffReputation);
    } else {
      fixRusffReputation();
    }
  }
}
