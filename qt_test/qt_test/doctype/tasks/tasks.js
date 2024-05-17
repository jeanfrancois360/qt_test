// Copyright (c) 2024, Jean Francois Munyaneza and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tasks', {
  start_date: function (frm) {
    // Validate start date
    if (frm.doc.start_date && frm.doc.end_date) {
      if (frm.doc.start_date > frm.doc.end_date) {
        frm.set_value('start_date', null);
        frappe.throw(__('Start date can not be greater than the End date'));
      }
    }
  },
  end_date: function (frm) {
    // Validate end date
    if (frm.doc.start_date && frm.doc.end_date) {
      if (frm.doc.end_date < frm.doc.start_date) {
        frm.set_value('end_date', null);
        frappe.throw(__('End date can not be less than the Start date'));
      }
    }
  },
});
