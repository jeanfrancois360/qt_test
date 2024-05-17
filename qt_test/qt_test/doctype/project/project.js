// Copyright (c) 2024, Jean Francois Munyaneza and contributors
// For license information, please see license.txt

frappe.ui.form.on('Project', {
  refresh: function (frm) {
    if (!frm.is_new()) {
      frm.add_custom_button(
        __('Create a task'),
        function () {
          create_task(frm);
        },
        __('Action')
      );
    }
  },
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

let create_task = function (frm) {
  frappe.route_options = {
    project: frm.doc.name,
  };
  frappe.new_doc('Tasks');
};
