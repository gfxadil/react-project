import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import InnerPageHeader from './InnerPageHeader';
import Footer from './Footer';

const Faqs = () => {
	return (
		<>
			<InnerPageHeader />
                <div className="subheader">
                    <h1 className="heading-style1">Faq's</h1>
                    <form action="" className="searchbar-style mt-5 col-md-8 offset-md-2">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search by keyword" />
                            <span className="input-group-btn">
                                <button className="btn" type="submit">Search</button>
                            </span>
                        </div>
                    </form>
                </div>
                <section className="faqs-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="accordion row" id="accordionExample">
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0">
                                                    <button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapseOne">Neque porro quisquam? <i className="fa fa-plus"></i></button>									
                                                </h2>
                                            </div>
                                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum in laborum, culpa ullam quae consequatur consectetur, quidem non labore cumque, architecto tempore tempora animi ipsa voluptatem, doloremque libero! Obcaecati, cumque!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>   
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                                <h2 className="mb-0">
                                                    <button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo">Neque porro quisquam? <i className="fa fa-plus"></i></button>
                                                </h2>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum in laborum, culpa ullam quae consequatur consectetur, quidem non labore cumque, architecto tempore tempora animi ipsa voluptatem, doloremque libero! Obcaecati, cumque!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-header" id="headingThree">
                                                <h2 className="mb-0">
                                                    <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree">Neque porro quisquam? <i className="fa fa-plus"></i></button>                     
                                                </h2>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam ut quas laborum obcaecati distinctio esse. Voluptatem soluta corporis, assumenda distinctio ducimus qui deleniti iusto excepturi totam pariatur neque, blanditiis temporibus.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-header" id="headingFour">
                                                <h2 className="mb-0">
                                                    <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour">Neque porro quisquam? <i className="fa fa-plus"></i></button>                     
                                                </h2>
                                            </div>
                                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam ut quas laborum obcaecati distinctio esse. Voluptatem soluta corporis, assumenda distinctio ducimus qui deleniti iusto excepturi totam pariatur neque, blanditiis temporibus.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-header" id="headingFive">
                                                <h2 className="mb-0">
                                                    <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive">Neque porro quisquam? <i className="fa fa-plus"></i></button>                     
                                                </h2>
                                            </div>
                                            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam ut quas laborum obcaecati distinctio esse. Voluptatem soluta corporis, assumenda distinctio ducimus qui deleniti iusto excepturi totam pariatur neque, blanditiis temporibus.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-header" id="headingSix">
                                                <h2 className="mb-0">
                                                    <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix">Neque porro quisquam? <i className="fa fa-plus"></i></button>                     
                                                </h2>
                                            </div>
                                            <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam ut quas laborum obcaecati distinctio esse. Voluptatem soluta corporis, assumenda distinctio ducimus qui deleniti iusto excepturi totam pariatur neque, blanditiis temporibus.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-header" id="headingSeven">
                                                <h2 className="mb-0">
                                                    <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven">Neque porro quisquam? <i className="fa fa-plus"></i></button>                     
                                                </h2>
                                            </div>
                                            <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam ut quas laborum obcaecati distinctio esse. Voluptatem soluta corporis, assumenda distinctio ducimus qui deleniti iusto excepturi totam pariatur neque, blanditiis temporibus.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-header" id="headingEight">
                                                <h2 className="mb-0">
                                                    <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight">Neque porro quisquam? <i className="fa fa-plus"></i></button>                     
                                                </h2>
                                            </div>
                                            <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam ut quas laborum obcaecati distinctio esse. Voluptatem soluta corporis, assumenda distinctio ducimus qui deleniti iusto excepturi totam pariatur neque, blanditiis temporibus.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>			
			<Footer	/>
		</>
	)
}

export default Faqs;