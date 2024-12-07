// import React from 'react';
// import { FaDownload, FaEdit, FaGlobe, FaStar } from 'react-icons/fa';
// import './inhouseproduct.css'

// const InhouseProductBtn = () => {
//     return (
//         <div className="content container-fluid text-start snipcss-6Igfk">
//             <div className="d-flex align-items-center justify-content-between flex-wrap gap-10 mb-3">
//                 <div>
//                     <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//                         <img src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png" alt="" /> Product details
//                     </h2>
//                 </div>
//             </div>
//             <div className="card card-top-bg-element">
//                 <div className="card-body">
//                     <div className="media flex-nowrap flex-column flex-sm-row gap-3 flex-grow-1">
//                         <div className="d-flex flex-column align-items-center __min-w-165px">
//                             <a className="aspect-1 float-left overflow-hidden" href="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-6488408103b83.png" data-lightbox="product-gallery-39">
//                                 <img className="avatar avatar-170 rounded-0" src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-6488408103b83.png" alt="" />
//                             </a>
//                             <a href="https://6valley.6amtech.com/product/ebook-ThqVSX" className="btn btn-outline--primary mr-1 mt-2" target="_blank">
//                                 <FaGlobe /> View live
//                             </a>
//                         </div>
//                         <a href="https://6valley.6amtech.com/storage/app/public/product/digital-product/2022-10-12-63464d7997f52.pdf" className="btn btn-outline--primary mr-1" title="Download">
//                             <FaDownload /> Download
//                         </a>
//                         <div className="d-block flex-grow-1 w-max-md-100">
//                             <div className="d-flex flex-wrap justify-content-between align-items-center">
//                                 <ul className="nav nav-tabs w-fit-content mb-2">
//                                     <li className="nav-item text-capitalize">
//                                         <a className="nav-link lang-link active" href="javascript:" id="en-link">english(EN) </a>
//                                     </li>
//                                     <li className="nav-item text-capitalize">
//                                         <a className="nav-link lang-link" href="javascript:" id="sa-link">Arabic(SA) </a>
//                                     </li>
//                                     <li className="nav-item text-capitalize">
//                                         <a className="nav-link lang-link" href="javascript:" id="bd-link">Bangla(BD) </a>
//                                     </li>
//                                     <li className="nav-item text-capitalize">
//                                         <a className="nav-link lang-link" href="javascript:" id="in-link">Hindi(IN) </a>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="d-flex flex-wrap align-items-center flex-sm-nowrap justify-content-between gap-3 min-h-50">
//                                 <div className="d-flex flex-wrap gap-2 align-items-center">
//                                     <a className="aspect-1 float-left overflow-hidden" href="https://6valley.6amtech.com/storage/app/public/product/2023-06-13-648840810296d.png" data-lightbox="product-gallery-39">
//                                         <img width="50" className="img-fit max-50" alt="" src="https://6valley.6amtech.com/storage/app/public/product/2023-06-13-648840810296d.png" />
//                                     </a>
//                                 </div>
//                                 <div className="d-flex gap-3 flex-nowrap lh-1 badge badge--primary-light justify-content-sm-end height-30px align-items-center">
//                                     <span className="text-dark"> 3 Orders </span>
//                                     <span className="border-left py-2"></span>
//                                     <div className="review-hover position-relative cursor-pointer d-flex gap-2 align-items-center">
//                                         <FaStar />
//                                         <span> 0 </span>
//                                         <div className="review-details-popup">
//                                             <h6 className="mb-2">Rating</h6>
//                                             <div>
//                                                 <ul className="list-unstyled list-unstyled-py-2 mb-0">
//                                                     <li className="d-flex align-items-center font-size-sm">
//                                                         <span className="mr-3"> 5 Star </span>
//                                                         <div className="progress flex-grow-1">
//                                                             <div className="progress-bar style-v9x9r" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="style-v9x9r"></div>
//                                                         </div>
//                                                         <span className="ml-3">0</span>
//                                                     </li>
//                                                     <li className="d-flex align-items-center font-size-sm">
//                                                         <span className="mr-3">4 Star</span>
//                                                         <div className="progress flex-grow-1">
//                                                             <div className="progress-bar style-AGJ1F" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="style-AGJ1F"></div>
//                                                         </div>
//                                                         <span className="ml-3">0</span>
//                                                     </li>
//                                                     <li className="d-flex align-items-center font-size-sm">
//                                                         <span className="mr-3">3 Star</span>
//                                                         <div className="progress flex-grow-1">
//                                                             <div className="progress-bar style-o1oer" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="style-o1oer"></div>
//                                                         </div>
//                                                         <span className="ml-3">0</span>
//                                                     </li>
//                                                     <li className="d-flex align-items-center font-size-sm">
//                                                         <span className="mr-3">2 Star</span>
//                                                         <div className="progress flex-grow-1">
//                                                             <div className="progress-bar style-Nr7NE" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="style-Nr7NE"></div>
//                                                         </div>
//                                                         <span className="ml-3">0</span>
//                                                     </li>
//                                                     <li className="d-flex align-items-center font-size-sm">
//                                                         <span className="mr-3">1 Star</span>
//                                                         <div className="progress flex-grow-1">
//                                                             <div className="progress-bar style-S9eRR" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="style-S9eRR"></div>
//                                                         </div>
//                                                         <span className="ml-3">0</span>
//                                                     </li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <span className="border-left py-2"></span>
//                                     <span className="text-dark"> 0 Reviews </span>
//                                 </div>
//                             </div>
//                             <div className="d-block mt-2">
//                                 <div className=" lang-form" id="en-form">
//                                     <div className="d-flex">
//                                         <h2 className="mb-2 pb-1 text-gulf-blue">Win - win Strategy (English) -eBook</h2>
//                                         <a className="btn btn-outline--primary btn-sm square-btn mx-2 w-auto h-25" title="Edit" href="https://6valley.6amtech.com/admin/products/update/39">
//                                             <FaEdit />
//                                         </a>
//                                     </div>
//                                     <div>
//                                         <label className="text-gulf-blue font-weight-bold">Description : </label>
//                                         <div className="rich-editor-html-content">
//                                             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="d-none lang-form" id="sa-form">
//                                     <div className="d-flex">
//                                         <h2 className="mb-2 pb-1 text-gulf-blue">Win - win Strategy (English) -eBook</h2>
//                                         <a className="btn btn-outline--primary btn-sm square-btn mx-2 w-auto h-25" title="Edit" href="https://6valley.6amtech.com/admin/products/update/39">
//                                             <FaEdit />
//                                         </a>
//                                     </div>
//                                     <div>
//                                         <label className="text-gulf-blue font-weight-bold">Description : </label>
//                                         <div className="rich-editor-html-content">
//                                             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="d-none lang-form" id="bd-form">
//                                     <div className="d-flex">
//                                         <h2 className="mb-2 pb-1 text-gulf-blue">Win - win Strategy (English) -eBook</h2>
//                                         <a className="btn btn-outline--primary btn-sm square-btn mx-2 w-auto h-25" title="Edit" href="https://6valley.6amtech.com/admin/products/update/39">
//                                             <FaEdit />
//                                         </a>
//                                     </div>
//                                     <div>
//                                         <label className="text-gulf-blue font-weight-bold">Description : </label>
//                                         <div className="rich-editor-html-content">
//                                             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="d-none lang-form" id="in-form">
//                                     <div className="d-flex">
//                                         <h2 className="mb-2 pb-1 text-gulf-blue">Win - win Strategy (English) -eBook</h2>
//                                         <a className="btn btn-outline--primary btn-sm square-btn mx-2 w-auto h-25" title="Edit" href="https://6valley.6amtech.com/admin/products/update/39">
//                                             <FaEdit />
//                                         </a>
//                                     </div>
//                                     <div>
//                                         <label className="text-gulf-blue font-weight-bold">Description : </label>
//                                         <div className="rich-editor-html-content">
//                                             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="accordion mt-3">
//                                     <div className="card">
//                                         <div className="card-header">
//                                             <h2 className="mb-0">
//                                                 <button type="button" className="btn btn-link d-flex align-items-center gap-2">
//                                                     <FaEdit /> Edit Translation
//                                                 </button>
//                                             </h2>
//                                         </div>
//                                         <div className="card-body">
//                                             <div className="row">
//                                                 <div className="col-lg-6">
//                                                     <div className="form-group mb-4">
//                                                         <label className="label--alternate text-dark">Language: </label>
//                                                         <select className="custom-select form-control">
//                                                             <option value="en">English</option>
//                                                             <option value="sa">Arabic</option>
//                                                             <option value="bd">Bangla</option>
//                                                             <option value="in">Hindi</option>
//                                                         </select>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default InhouseProductBtn;


import React from 'react';
import { FaEdit, FaGlobe, FaStar } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa6';
import Lightbox from 'react-image-lightbox'; // Make sure to install this package if you need the lightbox functionality
import 'react-image-lightbox/style.css';
import './inhouseproduct.css'

const InhouseProductBtn = () => {
    // State for lightbox gallery
    const [galleryOpen, setGalleryOpen] = React.useState(false);
    const [galleryIndex, setGalleryIndex] = React.useState(0);

    // Mock data for demonstration
    const images = [
        'https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-6488408103b83.png',
        'https://6valley.6amtech.com/storage/app/public/product/2023-06-13-648840810296d.png'
    ];

    // Mock data for languages
    const languages = [
        { id: 1, name: 'english(EN)', url: '' },
        // { id: 2, name: 'Arabic(SA)', url: 'javascript:' },
        // { id: 3, name: 'Bangla(BD)', url: 'javascript:' },
        // { id: 4, name: 'Hindi(IN)', url: 'javascript:' },
    ];

    // Mock data for reviews
    const reviews = [
        { id: 1, reviewer: 'John Doe', rating: 4, review: 'Great product!', date: '2023-07-01' },
        { id: 2, reviewer: 'Jane Smith', rating: 5, review: 'Excellent service!', date: '2023-07-02' },
        // Add more review objects as needed
    ];

    // Function to handle opening the lightbox
    const openLightbox = (index) => {
        setGalleryIndex(index);
        setGalleryOpen(true);
    };

    return (
        <div className="content container-fluid text-start snipcss-6Igfk">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-10 mb-3">
                <div>
                    <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
                        <img src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png" alt="" /> Product details
                    </h2>
                </div>
            </div>
            <div className="card card-top-bg-element">
                <div className="card-body">
                    <div className="media flex-nowrap flex-column flex-sm-row gap-3 flex-grow-1">
                        <div className="d-flex flex-column align-items-center __min-w-165px">
                            <a className="aspect-1 float-left overflow-hidden" href={images[0]} onClick={() => openLightbox(0)} data-lightbox="product-gallery-39">
                                <img className="avatar avatar-170 rounded-0" src={images[0]} alt="" />
                            </a>
                            <a href={languages[0].url} className="btn btn-outline--primary mr-1 mt-2" target="_blank">
                                <FaGlobe /> {languages[0].name}
                            </a>
                        </div>
                        <a href="" className="btn btn-outline--primary mr-1 flex" title="Download">
                            <FaDownload /> Download
                        </a>
                        <div className="d-block flex-grow-1 w-max-md-100">
                            <div className="d-flex flex-wrap justify-content-between align-items-center">
                                <ul className="nav nav-tabs w-fit-content mb-2">
                                    {languages.map(lang => (
                                        <li key={lang.id} className="nav-item text-capitalize">
                                            <a className="nav-link lang-link" href={lang.url} id={`${lang.name}-link`}>{lang.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="d-flex flex-wrap align-items-center flex-sm-nowrap justify-content-between gap-3 min-h-50">
                                <div className="d-flex flex-wrap gap-2 align-items-center">
                                    <a className="aspect-1 float-left overflow-hidden" href={images[1]} onClick={() => openLightbox(1)} data-lightbox="product-gallery-39">
                                        <img width="50" className="img-fit max-50" alt="" src={images[1]} />
                                    </a>
                                </div>
                                <div className="d-flex gap-3 flex-nowrap lh-1 badge badge--primary-light justify-content-sm-end height-30px align-items-center">
                                    <span className="text-dark"> 3 Orders </span>
                                    <span className="border-left py-2"></span>
                                    <div className="review-hover position-relative cursor-pointer d-flex gap-2 align-items-center">
                                        <FaStar /> <span> {reviews.length} </span>
                                        <div className="review-details-popup">
                                            <h6 className="mb-2">Rating</h6>
                                            <div>
                                                <ul className="list-unstyled list-unstyled-py-2 mb-0">
                                                    {[...Array(5)].map((_, index) => {
                                                        const starCount = 5 - index;
                                                        const reviewsWithRating = reviews.filter(review => review.rating === starCount);
                                                        return (
                                                            <li key={index} className="d-flex align-items-center font-size-sm">
                                                                <span className="mr-3"> {starCount} Star </span>
                                                                <div className="progress flex-grow-1">
                                                                    <div className="progress-bar style-v9x9r" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: `${(reviewsWithRating.length / reviews.length) * 100}%` }}></div>
                                                                </div>
                                                                <span className="ml-3">{reviewsWithRating.length}</span>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="border-left py-2"></span>
                                    <span className="text-dark"> {reviews.length} Reviews </span>
                                </div>
                            </div>
                            <div className="d-block mt-2">
                                {languages.map(lang => (
                                    <div key={lang.id} className={`lang-form${lang.id === 1 ? ' active' : ''}`} id={`${lang.name}-form`}>
                                        <div className="d-flex">
                                            <h2 className="mb-2 pb-1 text-gulf-blue">Win - win Strategy ({lang.name}) - eBook</h2>
                                            <a className="btn btn-outline--primary btn-sm square-btn mx-2 w-auto h-25" title="Edit" href="https://6valley.6amtech.com/admin/products/update/39">
                                                <FaEdit />
                                            </a>
                                        </div>
                                        <div>
                                            <label className="text-gulf-blue font-weight-bold">Description : </label>
                                            <div className="rich-editor-html-content">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="d-flex gap-3 flex-wrap">
                <div class="border p-3 mobile-w-100 w-170">
                    <div class="d-flex flex-column mb-1">
                        <h6 class="font-weight-normal text-capitalize">Total sold :</h6>
                        <h3 class="text-primary-500 fs-18">3</h3>
                    </div>
                    <div class="d-flex flex-column">
                        <h6 class="font-weight-normal text-capitalize">Total sold amount :</h6>
                        <h3 class="text-primary-500 fs-18"> $1,764.00 </h3>
                    </div>
                </div>
                <div class="row gy-3 flex-grow-1">
                    <div class="col-sm-6 col-xl-4">
                        <h4 class="mb-3 text-capitalize">General information</h4>
                        <div class="pair-list">
                            <div>
                                <span class="key text-nowrap">Brand</span>
                                <span>:</span>
                                <span class="value"> Estha dot </span>
                            </div>
                            <div>
                                <span class="key text-nowrap">Category</span>
                                <span>:</span>
                                <span class="value"> ebook </span>
                            </div>
                            <div>
                                <span class="key text-nowrap text-capitalize">Product type</span>
                                <span>:</span>
                                <span class="value">Digital</span>
                            </div>
                            <div>
                                <span class="key text-nowrap">Product SKU</span>
                                <span>:</span>
                                <span class="value">124677</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                        <h4 class="mb-3 text-capitalize">Price information</h4>
                        <div class="pair-list">
                            <div>
                                <span class="key text-nowrap text-capitalize">Unit price</span>
                                <span>:</span>
                                <span class="value"> $600.00 </span>
                            </div>
                            <div>
                                <span class="key text-nowrap">Tax</span>
                                <span>:</span>
                                <span class="value"> 5% (exclude) </span>
                            </div>
                            <div>
                                <span class="key text-nowrap">Discount</span>
                                <span>:</span>
                                <span class="value">2%</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                        <h4 class="mb-3">Tags</h4>
                        <div class="pair-list">
                            <div>
                                <span class="value"> ebook </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
            <div class="row g-2 mt-3">
        <div class="col-md-6">
            <div class="card h-100">
                <div class="card-header bg--primary--light">
                    <h5 class="card-title text-capitalize">Product SEO &amp; meta data</h5>
                </div>
                <div class="card-body">
                    <div>
                        <h6 class="mb-3 text-capitalize"> eBook </h6>
                    </div>
                    <p class="text-capitalize"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less norma </p>
                    <div class="d-flex flex-wrap gap-2">
                        <a class="aspect-1 float-left overflow-hidden" href="#" data-lightbox="meta-thumbnail">
                            <img class="max-width-100px" src="https://6valley.6amtech.com/storage/app/public/product/meta/2023-06-13-6488408103ea2.png" alt="Meta image" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card h-100">
                <div class="card-header bg--primary--light">
                    <h5 class="card-title text-capitalize">Product video</h5>
                </div>
                <div class="card-body">
                    <div>
                        <h6 class="mb-3 text-capitalize"> youtube Video link </h6>
                    </div>
                    <a href="" target="_blank" class="text-primary-500 "> https://www.youtube.com/embed/0sus46BflpU </a>
                </div>
            </div>
        </div>
    </div>
            <div className="card mt-4">
                <div className="table-responsive datatable-custom">
                    <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 text-start">
                        <thead className="thead-light thead-50 text-capitalize">
                            <tr>
                                <th>SL</th>
                                <th>Reviewer</th>
                                <th>Rating</th>
                                <th>Review</th>
                                <th>Date</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews.map(review => (
                                <tr key={review.id}>
                                    <td>{review.id}</td>
                                    <td>{review.reviewer}</td>
                                    <td>{review.rating}</td>
                                    <td>{review.review}</td>
                                    <td>{review.date}</td>
                                    <td className="text-center">
                                        <button className="btn btn-outline--primary btn-sm square-btn mx-2 w-auto h-25" title="Edit">
                                            <FaEdit />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="table-responsive mt-4">
                    <div className="px-4 d-flex justify-content-lg-end">
                        {/* Pagination or other controls */}
                    </div>
                </div>
                {/* <div className="text-center p-4">
                    <img className="mb-3 w-160" src="https://6valley.6amtech.com/public/assets/back-end/img/empty-state-icon/default.png" alt="No review found" />
                    <p className="mb-0">No review found...</p>
                </div> */}
            </div>
            {galleryOpen && (
                <Lightbox
                    mainSrc={images[galleryIndex]}
                    nextSrc={images[(galleryIndex + 1) % images.length]}
                    prevSrc={images[(galleryIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setGalleryOpen(false)}
                    onMovePrevRequest={() => setGalleryIndex((galleryIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setGalleryIndex((galleryIndex + 1) % images.length)}
                />
            )}
        </div>
    );
};

export default InhouseProductBtn;


// import React from 'react';
// import { Container, Row, Col, Card, Nav } from 'react-bootstrap';
// import { BsStar, BsFillStarFill, BsDownload, BsPencilSquare } from 'react-icons/bs';
// // import './inhouseproduct.css'

// const InhouseProductBtn = () => {
//     return (
//         <div className="content container-fluid text-start snipcss-6Igfk">
//             <div className="d-flex align-items-center justify-content-between flex-wrap gap-10 mb-3">
//                 <div>
//                     <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//                         <img src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png" alt="" /> Product details
//                     </h2>
//                 </div>
//             </div>
//             <Card className="card-top-bg-element">
//                 <Card.Body>
//                     <div className="media flex-nowrap flex-column flex-sm-row gap-3 flex-grow-1">
//                         <div className="d-flex flex-column align-items-center min-w-165px">
//                             <a className="aspect-1 float-left overflow-hidden" href="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-6488408103b83.png" data-lightbox="product-gallery-39">
//                                 <img className="avatar avatar-170 rounded-0" src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-6488408103b83.png" alt="" />
//                             </a>
//                             <a href="https://6valley.6amtech.com/product/ebook-ThqVSX" className="btn btn-outline-primary mr-1 mt-2" target="_blank">
//                                 <i className="tio-globe"></i> View live
//                             </a>
//                         </div>
//                         <a href="https://6valley.6amtech.com/storage/app/public/product/digital-product/2022-10-12-63464d7997f52.pdf" className="btn btn-outline-primary mr-1" title="Download">
//                             <BsDownload /> Download
//                         </a>
//                         <div className="d-block flex-grow-1 w-max-md-100">
//                             <div className="d-flex flex-wrap justify-content-between align-items-center">
//                                 <Nav className="w-fit-content mb-2">
//                                     <Nav.Item>
//                                         <Nav.Link href="javascript:" className="lang-link active">english(EN)</Nav.Link>
//                                     </Nav.Item>
//                                     <Nav.Item>
//                                         <Nav.Link href="javascript:" className="lang-link">Arabic(SA)</Nav.Link>
//                                     </Nav.Item>
//                                     <Nav.Item>
//                                         <Nav.Link href="javascript:" className="lang-link">Bangla(BD)</Nav.Link>
//                                     </Nav.Item>
//                                     <Nav.Item>
//                                         <Nav.Link href="javascript:" className="lang-link">Hindi(IN)</Nav.Link>
//                                     </Nav.Item>
//                                 </Nav>
//                             </div>
//                             <div className="d-flex flex-wrap align-items-center flex-sm-nowrap justify-content-between gap-3 min-h-50">
//                                 <div className="d-flex flex-wrap gap-2 align-items-center">
//                                     <a className="aspect-1 float-left overflow-hidden" href="https://6valley.6amtech.com/storage/app/public/product/2023-06-13-648840810296d.png" data-lightbox="product-gallery-39">
//                                         <img width="50" className="img-fit max-50" alt="" src="https://6valley.6amtech.com/storage/app/public/product/2023-06-13-648840810296d.png" />
//                                     </a>
//                                 </div>
//                                 <div className="d-flex gap-3 flex-nowrap lh-1 badge badge-primary-light justify-content-sm-end height-30px align-items-center">
//                                     <span className="text-dark"> 3 Orders </span>
//                                     <span className="border-left py-2"></span>
//                                     <div className="review-hover position-relative cursor-pointer d-flex gap-2 align-items-center">
//                                         <BsStar /> 0
//                                         <div className="review-details-popup">
//                                             <h6 className="mb-2">Rating</h6>
//                                             <div>
//                                                 <ul className="list-unstyled list-unstyled-py-2 mb-0">
//                                                     <li className="d-flex align-items-center font-size-sm">
//                                                         <span className="mr-3"> 5 Star </span>
//                                                         <div className="progress flex-grow-1">
//                                                             <div className="progress-bar style-v9x9r" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
//                                                         </div>
//                                                         <span className="ml-3">0</span>
//                                                     </li>
//                                                     <li className="d-flex align-items-center font-size-sm">
//                                                         <span className="mr-3"> 4 Star </span>
//                                                         <div className="progress flex-grow-1">
//                                                             <div className="progress-bar style-AGJ1F" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
//                                                         </div>
//                                                         <span className="ml-3">0</span>
//                                                     </li>
//                                                     <li className="d-flex align-items-center font-size-sm">
//                                                         <span className="mr-3"> 3 Star </span>
//                                                         <div className="progress flex-grow-1">
//                                                             <div className="progress-bar style-o1oer" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
//                                                         </div>
//                                                         <span className="ml-3">0</span>
//                                                     </li>
//                                                     <li className="d-flex align-items-center font-size-sm">
//                                                         <span className="mr-3"> 2 Star </span>
//                                                         <div className="progress flex-grow-1">
//                                                             <div className="progress-bar style-Nr7NE" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
//                                                         </div>
//                                                         <span className="ml-3">0</span>
//                                                     </li>
//                                                     <li className="d-flex align-items-center font-size-sm">
//                                                         <span className="mr-3"> 1 Star </span>
//                                                         <div className="progress flex-grow-1">
//                                                             <div className="progress-bar style-S9eRR" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
//                                                         </div>
//                                                         <span className="ml-3">0</span>
//                                                     </li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <span className="border-left py-2"></span>
//                                     <span className="text-dark"> 0 Reviews </span>
//                                 </div>
//                             </div>
//                             <div className="d-block mt-2">
//                                 <div className="lang-form" id="en-form">
//                                     <div className="d-flex">
//                                         <h2 className="mb-2 pb-1 text-gulf-blue">Win - win Strategy (English) - eBook</h2>
//                                         <a className="btn btn-outline-primary btn-sm square-btn mx-2 w-auto h-25" title="Edit" href="https://6valley.6amtech.com/admin/products/update/39">
//                                             <BsPencilSquare />
//                                         </a>
//                                     </div>
//                                     <div>
//                                         <label className="text-gulf-blue font-weight-bold">Description :</label>
//                                         <div className="rich-editor-html-content">
//                                             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="d-none lang-form" id="sa-form">
//                                     <div className="d-flex">
//                                         <h2 className="mb-2 pb-1 text-gulf-blue">Win - win Strategy (Arabic) - eBook</h2>
//                                         <a className="btn btn-outline-primary btn-sm square-btn mx-2 w-auto h-25" title="Edit" href="https://6valley.6amtech.com/admin/products/update/39">
//                                             <BsPencilSquare />
//                                         </a>
//                                     </div>
//                                     <div>
//                                         <label className="text-gulf-blue font-weight-bold">Description :</label>
//                                         <div className="rich-editor-html-content">
//                                             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="d-none lang-form" id="bd-form">
//                                     <div className="d-flex">
//                                         <h2 className="mb-2 pb-1 text-gulf-blue">Win - win Strategy (Bangla) - eBook</h2>
//                                         <a className="btn btn-outline-primary btn-sm square-btn mx-2 w-auto h-25" title="Edit" href="https://6valley.6amtech.com/admin/products/update/39">
//                                             <BsPencilSquare />
//                                         </a>
//                                     </div>
//                                     <div>
//                                         <label className="text-gulf-blue font-weight-bold">Description :</label>
//                                         <div className="rich-editor-html-content">
//                                             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="d-none lang-form" id="in-form">
//                                     <div className="d-flex">
//                                         <h2 className="mb-2 pb-1 text-gulf-blue">Win - win Strategy (Hindi) - eBook</h2>
//                                         <a className="btn btn-outline-primary btn-sm square-btn mx-2 w-auto h-25" title="Edit" href="https://6valley.6amtech.com/admin/products/update/39">
//                                             <BsPencilSquare />
//                                         </a>
//                                     </div>
//                                     <div>
//                                         <label className="text-gulf-blue font-weight-bold">Description :</label>
//                                         <div className="rich-editor-html-content">
//                                             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="d-block my-3 snipcss-8nssd">
//                                 <ul className="nav nav-tabs mb-3 snipcss-7wgl8" role="tablist">
//                                     <li className="nav-item" role="presentation">
//                                         <a className="nav-link active" href="#en" role="tab" data-toggle="tab">English (EN)</a>
//                                     </li>
//                                     <li className="nav-item" role="presentation">
//                                         <a className="nav-link" href="#sa" role="tab" data-toggle="tab">Arabic (SA)</a>
//                                     </li>
//                                     <li className="nav-item" role="presentation">
//                                         <a className="nav-link" href="#bd" role="tab" data-toggle="tab">Bangla (BD)</a>
//                                     </li>
//                                     <li className="nav-item" role="presentation">
//                                         <a className="nav-link" href="#in" role="tab" data-toggle="tab">Hindi (IN)</a>
//                                     </li>
//                                 </ul>
//                                 <div className="tab-content">
//                                     <div className="tab-pane active" role="tabpanel" id="en">
//                                         <h4 className="text-center mb-3">English (EN)</h4>
//                                         <div className="rich-editor-html-content">
//                                             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
//                                         </div>
//                                     </div>
//                                     <div className="tab-pane" role="tabpanel" id="sa">
//                                         <h4 className="text-center mb-3">Arabic (SA)</h4>
//                                         <div className="rich-editor-html-content">
//                                             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
//                                         </div>
//                                     </div>
//                                     <div className="tab-pane" role="tabpanel" id="bd">
//                                         <h4 className="text-center mb-3">Bangla (BD)</h4>
//                                         <div className="rich-editor-html-content">
//                                             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
//                                         </div>
//                                     </div>
//                                     <div className="tab-pane" role="tabpanel" id="in">
//                                         <h4 className="text-center mb-3">Hindi (IN)</h4>
//                                         <div className="rich-editor-html-content">
//                                             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </Card.Body>
//             </Card>
//         </div>
//     );
// };

// export default InhouseProductBtn;
