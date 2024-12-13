import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './VenderWallet.css'

const VenderWallet = () => {
    // Your array of withdraw requests data (example)
    const withdrawRequests = [
        {
            sl: 1,
            amount: '$500.00',
            name: 'Not found',
            requestTime: '2022-11-20 01:41:01',
            status: 'Pending',
            actionLink: '/venderwalletdetail',
            actionIcon: <FaEye />,
        },
        {
            sl: 2,
            amount: '$500.00',
            name: 'Not found',
            requestTime: '2022-11-20 01:41:01',
            status: 'Complete',
            actionLink: '/venderwalletdetail',
            actionIcon: <FaEye />,
        },
        // Add more data items as needed
    ];

    return (
        <div className="content container-fluid snipcss-l7stG">
            <div className="mb-3">
                <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
                    <img width="20" src="https://6valley.6amtech.com/public/assets/back-end/img/withdraw-icon.png" alt="Withdraw Icon" /> Withdraw
                </h2>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="p-3">
                            <div className="row gy-1 align-items-center justify-content-between">
                                <div className="col-auto">
                                    <h5 className="text-capitalize"> Withdraw request table <span className="badge badge-soft-dark radius-50 fz-12 ml-1">12</span></h5>
                                </div>
                                <div className="d-flex col-auto gap-3">
                                    <select name="withdraw_status_filter" data-action="" className="custom-select min-w-120 withdraw-status-filter">
                                        <option value="all">All</option>
                                        <option value="approved">Approved</option>
                                        <option value="denied">Denied</option>
                                        <option value="pending">Pending</option>
                                    </select>
                                    <div>
                                        <button type="button" className="btn btn-outline--primary text-nowrap btn-block" data-toggle="dropdown">
                                            Export
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-right">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <img width="14" src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png" alt="Excel Icon" /> Excel
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table id="datatable" className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 style-SQbiq">
                                <thead className="thead-light thead-50 text-capitalize">
                                    <tr>
                                        <th>SL</th>
                                        <th>Amount</th>
                                        <th>Name</th>
                                        <th>Request time</th>
                                        <th className="text-center">Status</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {withdrawRequests.map((request, index) => (
                                        <tr key={index}>
                                            <td>{request.sl}</td>
                                            <td>{request.amount}</td>
                                            <td><span>{request.name}</span></td>
                                            <td>{request.requestTime}</td>
                                            <td className="text-center">
                                                <label className={`badge badge-soft-${request.status === 'Approved' ? 'success' : request.status === 'Denied' ? 'danger' : 'primary'}`}>{request.status}</label>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-center">
                                                    <Link  to={request.actionLink} className="btn btn-outline-info btn-sm square-btn" title="View">
                                                        {request.actionIcon}
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="table-responsive mt-4">
                            <div className="px-4 d-flex justify-content-center justify-content-md-end">
                                {/* Additional content */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VenderWallet;
