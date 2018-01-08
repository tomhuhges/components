import React, { Component } from 'react';

class Typography extends Component {
  render() {
    return (
      <div>
        <h3 className="section-header">Typography</h3>
        <div className="typography__container">
          <div className="row middle-xs table-header">
            <div className="col-xs-4 col-sm-2"><h5 className="monospace">Element</h5></div>
            <div className="col-xs-8 col-md-4"><h5 className="monospace">Example</h5></div>
            <div className="col-xs-2 align--right"><h5 className="monospace">font-size</h5></div>
            <div className="col-xs-2 align--right"><h5 className="monospace">line-height</h5></div>
            <div className="col-xs-2 align--right"><h5 className="monospace">margins</h5></div>
          </div>
          <div className="row middle-xs">
            <div className="col-xs-4 col-sm-2"><pre>h1</pre></div>
            <div className="col-xs-8 col-md-4"><h1>Heading1</h1></div>
            <div className="col-xs-2 align--right"><pre>3em/4em</pre></div>
            <div className="col-xs-4 align--right"><pre>0.67em</pre></div>
          </div>
          <div className="row middle-xs">
            <div className="col-xs-4 col-sm-2"><pre>h2</pre></div>
            <div className="col-xs-8 col-md-4"><h2>Heading2</h2></div>
            <div className="col-xs-2 align--right"><pre>2em</pre></div>
            <div className="col-xs-4 align--right"><pre>0.83em</pre></div>
          </div>
          <div className="row middle-xs">
            <div className="col-xs-4 col-sm-2"><pre>h3</pre></div>
            <div className="col-xs-8 col-md-4"><h3>Heading3</h3></div>
            <div className="col-xs-2 align--right"><pre>1.5em</pre></div>
            <div className="col-xs-4 align--right"><pre>1em</pre></div>
          </div>
          <div className="row middle-xs">
            <div className="col-xs-4 col-sm-2"><pre>h4</pre></div>
            <div className="col-xs-8 col-md-4"><h4>Heading4</h4></div>
            <div className="col-xs-2 align--right"><pre>1em</pre></div>
            <div className="col-xs-4 align--right"><pre>1.33em</pre></div>
          </div>
          <div className="row middle-xs">
            <div className="col-xs-4 col-sm-2"><pre>h5</pre></div>
            <div className="col-xs-8 col-md-4"><h5>Heading5</h5></div>
            <div className="col-xs-2 align--right"><pre>0.83em</pre></div>
            <div className="col-xs-4 align--right"><pre>1.67em</pre></div>
          </div>
          <div className="row middle-xs">
            <div className="col-xs-4 col-sm-2"><pre>h6</pre></div>
            <div className="col-xs-8 col-md-4"><h6>Heading6</h6></div>
            <div className="col-xs-2 align--right"><pre>0.67em</pre></div>
            <div className="col-xs-4 align--right"><pre>2.33em</pre></div>
          </div>
          <div className="row middle-xs">
            <div className="col-xs-4 col-sm-2"><pre>p</pre></div>
            <div className="col-xs-8 col-md-4">
              <p>A change, a final change includes potatoes. This is no authority for the abuse of cheese. What language can instruct any fellow.</p>
              <p>A shining breakfast, a breakfast shining, no dispute, no practice, nothing, nothing at all.</p>
            </div>
            <div className="col-xs-2 align--right"><pre>1.25em</pre></div>
            <div className="col-xs-2 align--right"><pre>1.5em</pre></div>
            <div className="col-xs-2 align--right"><pre>1em</pre></div>
          </div>
          <div className="row middle-xs">
            <div className="col-xs-4 col-sm-2"><pre>figcaption</pre></div>
            <div className="col-xs-8 col-md-4">
              <figcaption>Fig 1.1 A single example of excellence is in the meat. A bent stick is surging and might all might is mental. A grand clothes is searching out a candle not that wheatly not that by more than an owl and a path. A ham is proud of cocoanut.</figcaption>
            </div>
            <div className="col-xs-2 align--right"><pre>1em</pre></div>
            <div className="col-xs-2 align--right"><pre>1.15em</pre></div>
            <div className="col-xs-2 align--right"><pre>none</pre></div>
          </div>
        </div>
      </div>
    );
  }

}

export default Typography;
