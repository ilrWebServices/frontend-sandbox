$(document).ready(function() {
  $('#mainNav').mouseover(function() {
    $('#mainNav').addClass('active');
  });
  $('#mainNav').mouseout(function() {
    $('#mainNav').removeClass('active');
    $('#subAbout').removeClass('activeNav');
    $('#subAdmissions').removeClass('activeNav');
    $('#subAcademics').removeClass('activeNav');
    $('#subCareers').removeClass('activeNav');
    $('#subProf').removeClass('activeNav');
    $('#subCenters').removeClass('activeNav');
  });
  $('#liAbout').mouseover(function() {
    $('#subAbout').addClass('activeNav');
  });
  $('#liAdmissions').mouseover(function() {
    $('#subAdmissions').addClass('activeNav');
  });
  $('#liAcademics').mouseover(function() {
    $('#subAcademics').addClass('activeNav');
  });
  $('#liCareers').mouseover(function() {
    $('#subCareers').addClass('activeNav');
  });
  $('#liProf').mouseover(function() {
    $('#subProf').addClass('activeNav');
  });
  $('#liCenters').mouseover(function() {
    $('#subCenters').addClass('activeNav');
  });

});
