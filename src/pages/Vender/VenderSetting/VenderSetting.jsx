// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'; // Assuming you have imported the necessary icon

// const VendorSettings = () => {
//     return (
//         <div className="content container-fluid snipcss0-0-0-1 snipcss-IjYUx">
//             <div className="row g-3 snipcss0-1-1-25">
//                 <div className="col-md-6 snipcss0-2-25-26">
//                     <form action="https://6valley.6amtech.com/admin/vendors/update_setting/3" method="post" className="snipcss0-3-26-27">
//                         <input type="hidden" name="_token" value="xODXJF1cGU5Uk2IombJHq9U8AL4dxWA8yUTpg7Cm" autoComplete="off" className="snipcss0-4-27-28" />
//                         <div className="card snipcss0-4-27-29">
//                             <div className="card-header snipcss0-5-29-30">
//                                 <h5 className="mb-0 text-capitalize snipcss0-6-30-31"> Sales commission :</h5>
//                                 <label className="switcher snipcss0-6-30-32" htmlFor="commission-status">
//                                     <input
//                                         type="checkbox"
//                                         className="switcher_input toggle-switch-message snipcss0-7-32-33"
//                                         value="1"
//                                         name="commission_status"
//                                         id="commission-status"
//                                         data-modal-id="toggle-modal"
//                                         data-toggle-id="commission-status"
//                                         data-on-image="general-icon.png"
//                                         data-off-image="general-icon.png"
//                                         data-on-title="Want to Turn ON Sales Commission For This Vendor"
//                                         data-off-title="Want to Turn OFF Sales Commission For This Vendor"
//                                         data-on-message="<p>If sales commission is enabled here the this commission will be applied</p>"
//                                         data-off-message="<p>If sales commission is disabled here the system default commission will be applied</p>"
//                                     />
//                                     <span className="switcher_control snipcss0-7-32-34"></span>
//                                 </label>
//                             </div>
//                             <div className="card-body snipcss0-5-29-35">
//                                 <small className="badge badge-soft-info text-wrap mb-3 snipcss0-6-35-36"> If sales commission is disabled here the system default commission will be applied. </small>
//                                 <div className="form-group snipcss0-6-35-37">
//                                     <label className="snipcss0-7-37-38">Commission( % )</label>
//                                     <input type="number" value="" className="form-control snipcss0-7-37-39" name="commission" />
//                                 </div>
//                                 <button type="submit" className="btn btn--primary snipcss0-6-35-40">Update</button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//                 <div className="col-md-6 snipcss0-2-25-41">
//                     <form action="https://6valley.6amtech.com/admin/vendors/update_setting/3" method="post" className="snipcss0-3-41-42">
//                         <input type="hidden" name="_token" value="xODXJF1cGU5Uk2IombJHq9U8AL4dxWA8yUTpg7Cm" autoComplete="off" className="snipcss0-4-42-43" />
//                         <div className="card snipcss0-4-42-44">
//                             <div className="card-header snipcss0-5-44-45">
//                                 <h5 className="mb-0 snipcss0-6-45-46"> GST Number:</h5>
//                                 <label className="switcher snipcss0-6-45-47" htmlFor="gst-status">
//                                     <input
//                                         type="checkbox"
//                                         className="switcher_input toggle-switch-message snipcss0-7-47-48"
//                                         value="1"
//                                         name="gst_status"
//                                         id="gst-status"
//                                         data-modal-id="toggle-modal"
//                                         data-toggle-id="gst-status"
//                                         data-on-image="general-icon.png"
//                                         data-off-image="general-icon.png"
//                                         data-on-title="Want to Turn ON GST Number For This Vendor"
//                                         data-off-title="Want to Turn OFF GST Number For This Vendor"
//                                         data-on-message="<p>If GST number is enabled here it will be show in invoice</p>"
//                                         data-off-message="<p>If GST number is disabled here it will not show in invoice</p>"
//                                     />
//                                     <span className="switcher_control snipcss0-7-47-49"></span>
//                                 </label>
//                             </div>
//                             <div className="card-body snipcss0-5-44-50">
//                                 <small className="badge text-wrap badge-soft-info mb-3 snipcss0-6-50-51"> If GST number is disabled here it will not show in invoice. </small>
//                                 <div className="form-group snipcss0-6-50-52">
//                                     <label className="snipcss0-7-52-53"> Number </label>
//                                     <input type="text" value="" className="form-control snipcss0-7-52-54" name="gst" />
//                                 </div>
//                                 <button type="submit" className="btn btn--primary snipcss0-6-50-55">Update </button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//                 <div className="col-md-6 snipcss0-2-25-56">
//                     <div className="card snipcss0-3-56-57">
//                         <div className="card-header snipcss0-4-57-58">
//                             <h5 className="mb-0 snipcss0-5-58-59">Vendor POS</h5>
//                         </div>
//                         <div className="card-body snipcss0-4-57-60">
//                             <form action="https://6valley.6amtech.com/admin/vendors/update_setting/3" method="post" className="snipcss0-5-60-61">
//                                 <input type="hidden" name="_token" value="xODXJF1cGU5Uk2IombJHq9U8AL4dxWA8yUTpg7Cm" autoComplete="off" className="snipcss0-6-61-62" />
//                                 <input type="hidden" name="seller_pos_update" value="1" className="snipcss0-6-61-63" />
//                                 <div className="form-group snipcss0-6-61-64">
//                                     <div className="d-flex justify-content-between align-items-center gap-10 form-control snipcss0-7-64-65">
//                                         <span className="title-color text-capitalize snipcss0-8-65-66">
//                                             Vendor POS permission
//                                             <span className="input-label-secondary cursor-pointer snipcss0-9-66-67" data-toggle="tooltip" data-placement="right" title="If enabled this vendor can access POS from the website and vendor app">
//                                                 <FontAwesomeIcon icon={faInfoCircle} className="snipcss0-10-67-68" />
//                                             </span>
//                                         </span>
//                                         <label className="switcher snipcss0-8-65-69" htmlFor="seller-pos">
//                                             <input
//                                                 type="checkbox"
//                                                 className="switcher_input toggle-switch-message snipcss0-9-69-70"
//                                                 value="1"
//                                                 name="seller_pos"
//                                                 id="seller-pos"
//                                                 data-modal-id="toggle-modal"
//                                                 data-toggle-id="seller-pos"
//                                                 data-on-image="pos-seller-on.png"
//                                                 data-off-image="pos-seller-off.png"
//                                                 data-on-title="Want to Turn ON POS For This Vendor"
//                                                 data-off-title="Want to Turn OFF POS For This Vendor"
//                                                 data-on-message="<p>If enabled this vendor can access POS from the website and vendor app</p>"
//                                                 data-off-message="<p>If disabled this vendor cannot access POS from the website and vendor app</p>"
//                                             />
//                                             <span className="switcher_control snipcss0-9-69-71"></span>
//                                         </label>
//                                     </div>
//                                 </div>
//                                 <div className="d-flex justify-content-end snipcss0-6-61-72">
//                                     <button type="submit" className="btn btn--primary snipcss0-7-72-73">Save</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default VendorSettings;



import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'; // Assuming you have imported the necessary icon
import { Modal, Button } from 'react-bootstrap';

const VendorSettings = () => {
    const [showCommissionModal, setShowCommissionModal] = useState(false);
    const [showGSTModal, setShowGSTModal] = useState(false);

    const handleCommissionToggle = () => {
        setShowCommissionModal(true);
        // Handle toggle logic or API call here
    };

    const handleGSTToggle = () => {
        setShowGSTModal(true);
        // Handle toggle logic or API call here
    };

    return (
        <div className="content container-fluid snipcss0-0-0-1 snipcss-IjYUx">
            <div className="row g-3 snipcss0-1-1-25">
                <div className="col-md-6 snipcss0-2-25-26">
                    <form action="https://6valley.6amtech.com/admin/vendors/update_setting/3" method="post" className="snipcss0-3-26-27">
                        {/* Your existing commission card */}
                        <div className="card snipcss0-4-27-29">
                            <div className="card-header snipcss0-5-29-30">
                                <h5 className="mb-0 text-capitalize snipcss0-6-30-31"> Sales commission :</h5>
                                <label className="switcher snipcss0-6-30-32" htmlFor="commission-status">
                                    <input
                                        type="checkbox"
                                        className="switcher_input toggle-switch-message snipcss0-7-32-33"
                                        value="1"
                                        name="commission_status"
                                        id="commission-status"
                                        data-modal-id="toggle-modal"
                                        data-toggle-id="commission-status"
                                        data-on-image="general-icon.png"
                                        data-off-image="general-icon.png"
                                        data-on-title="Want to Turn ON Sales Commission For This Vendor"
                                        data-off-title="Want to Turn OFF Sales Commission For This Vendor"
                                        data-on-message="<p>If sales commission is enabled here the this commission will be applied</p>"
                                        data-off-message="<p>If sales commission is disabled here the system default commission will be applied</p>"
                                        onClick={handleCommissionToggle}
                                    />
                                    <span className="switcher_control snipcss0-7-32-34"></span>
                                </label>
                            </div>
                            {/* Remaining card body content */}
                        </div>
                    </form>
                </div>
                <div className="col-md-6 snipcss0-2-25-41">
                    <form action="https://6valley.6amtech.com/admin/vendors/update_setting/3" method="post" className="snipcss0-3-41-42">
                        {/* Your existing GST card */}
                        <div className="card snipcss0-4-42-44">
                            <div className="card-header snipcss0-5-44-45">
                                <h5 className="mb-0 snipcss0-6-45-46"> GST Number:</h5>
                                <label className="switcher snipcss0-6-45-47" htmlFor="gst-status">
                                    <input
                                        type="checkbox"
                                        className="switcher_input toggle-switch-message snipcss0-7-47-48"
                                        value="1"
                                        name="gst_status"
                                        id="gst-status"
                                        data-modal-id="toggle-modal"
                                        data-toggle-id="gst-status"
                                        data-on-image="general-icon.png"
                                        data-off-image="general-icon.png"
                                        data-on-title="Want to Turn ON GST Number For This Vendor"
                                        data-off-title="Want to Turn OFF GST Number For This Vendor"
                                        data-on-message="<p>If GST number is enabled here it will be show in invoice</p>"
                                        data-off-message="<p>If GST number is disabled here it will not show in invoice</p>"
                                        onClick={handleGSTToggle}
                                    />
                                    <span className="switcher_control snipcss0-7-47-49"></span>
                                </label>
                            </div>
                            {/* Remaining card body content */}
                        </div>
                    </form>
                </div>
            </div>

            {/* Modal for Sales Commission */}
            <Modal show={showCommissionModal} onHide={() => setShowCommissionModal(false)}>
                <div className="modal-content shadow-lg snipcss-sFxFy">
                    <div className="modal-header border-0 pb-0 d-flex justify-content-end">
                        <button type="button" className="btn-close border-0" onClick={() => setShowCommissionModal(false)} aria-label="Close">
                            <FontAwesomeIcon icon={faInfoCircle} className="tio-clear" />
                        </button>
                    </div>
                    <div className="modal-body px-4 px-sm-5 pt-0">
                        <div className="d-flex flex-column align-items-center text-center gap-2 mb-2">
                            <img src="https://6valley.6amtech.com/public/assets/back-end/img/modal/general-icon.png" width="70" className="mb-3 mb-20" id="toggle-modal-image" alt="" />
                            <h5 className="modal-title" id="toggle-modal-title">Want to Turn OFF Sales Commission For This Vendor</h5>
                            <div className="text-center" id="toggle-modal-message">
                                <p>If sales commission is disabled here the system default commission will be applied</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center gap-3">
                            <button type="button" className="btn btn--primary min-w-120" id="toggle-modal-ok-button" onClick={() => setShowCommissionModal(false)}>Ok</button>
                            <button type="button" className="btn btn-danger-light min-w-120" onClick={() => setShowCommissionModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </Modal>

            {/* Modal for GST Number */}
            <Modal show={showGSTModal} onHide={() => setShowGSTModal(false)}>
                <div className="modal-content shadow-lg snipcss-sFxFy">
                    <div className="modal-header border-0 pb-0 d-flex justify-content-end">
                        <button type="button" className="btn-close border-0" onClick={() => setShowGSTModal(false)} aria-label="Close">
                            <FontAwesomeIcon icon={faInfoCircle} className="tio-clear" />
                        </button>
                    </div>
                    <div className="modal-body px-4 px-sm-5 pt-0">
                        <div className="d-flex flex-column align-items-center text-center gap-2 mb-2">
                            <img src="https://6valley.6amtech.com/public/assets/back-end/img/modal/general-icon.png" width="70" className="mb-3 mb-20" id="toggle-modal-image" alt="" />
                            <h5 className="modal-title" id="toggle-modal-title">Want to Turn OFF GST Number For This Vendor</h5>
                            <div className="text-center" id="toggle-modal-message">
                                <p>If GST number is disabled here it will not show in invoice</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center gap-3">
                            <button type="button" className="btn btn--primary min-w-120" id="toggle-modal-ok-button" onClick={() => setShowGSTModal(false)}>Ok</button>
                            <button type="button" className="btn btn-danger-light min-w-120" onClick={() => setShowGSTModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default VendorSettings;
