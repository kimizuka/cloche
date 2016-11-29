//
//  ViewController.swift
//  cloche
//
//  Created by kimizuka-fumitaka on 2016/11/21.
//  Copyright © 2016年 kimizuka-fumitaka. All rights reserved.
//

import UIKit
import WebKit

class ViewController: UIViewController {
    private var webView = WKWebView()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.

        self.view.addSubview(self.webView)
        self.view.addConstraint(NSLayoutConstraint(item: self.view, attribute: NSLayoutAttribute.width, relatedBy: NSLayoutRelation.equal, toItem: webView, attribute: NSLayoutAttribute.width, multiplier: 1.0, constant: 0.0))
        self.view.addConstraint(NSLayoutConstraint(item: self.view, attribute: NSLayoutAttribute.centerX, relatedBy: NSLayoutRelation.equal, toItem: webView, attribute: NSLayoutAttribute.centerX, multiplier: 1.0, constant: 0.0))
        self.view.addConstraint(NSLayoutConstraint(item: self.topLayoutGuide, attribute: NSLayoutAttribute.bottom, relatedBy: NSLayoutRelation.equal, toItem: webView, attribute: NSLayoutAttribute.top, multiplier: 1.0, constant: 0.0))
        self.view.addConstraint(NSLayoutConstraint(item: self.bottomLayoutGuide, attribute: NSLayoutAttribute.top, relatedBy: NSLayoutRelation.equal, toItem: webView, attribute: NSLayoutAttribute.bottom, multiplier: 1.0, constant: 0.0))

        self.webView.translatesAutoresizingMaskIntoConstraints = false
        self.webView.scrollView.bounces = false
        
        let url = NSURL(string:"https://kimizuka.github.io/cloche/")
        let req = NSURLRequest(url:url as! URL)
        self.webView.load(req as URLRequest)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

