package com.sunnyweather.reactnative

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main.*
import com.facebook.react.ReactActivity

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        reactbtn.setOnClickListener {
            val intent = Intent(this,MyReactActivity::class.java)
            startActivity(intent)
        }
    }

}
